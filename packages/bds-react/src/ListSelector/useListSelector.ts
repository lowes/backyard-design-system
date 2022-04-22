import * as React from 'react'

import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { ListOptionProps, ListOptionRef } from '../ListOption'

import type { ListSelectorSingleRef } from './ListSelectorSingle'

/**
 * Returns true if option is defined with value that is
 *  * not undefined, and
 *  * not null, and
 *  * not an empty string
 *
 * @param {ListSelectorOption['value']} option - Option to validate
 * @return {Boolean}
 */
const isValid = (value: ListSelectorOption['value']): boolean =>
    typeof value !== 'undefined' && value !== null && value !== ''

const useListSelector = ({
    disabled = false,
    onChange,
    children,
    options,
    innerRef,
    defaultValue,
    value: valueProp,
    ...props
}: UseListSelectorProps) => {
    const [value, setValue] = React.useState<UseListSelectorProps['value']>(
        (valueProp || defaultValue) as UseListSelectorProps['value'],
    )

    const refs = React.useRef(
        [...new Array(options ? options.length : React.Children.count(children))].map<
            React.RefObject<ListOptionRef>
        >(React.createRef),
    )

    /**
     * Force event.target to `innerRef`, the text `input`
     *
     * @param {Event} event - DOM Event
     */
    function getEvent<E>(event: E) {
        return event
    }

    // eslint-disable-next-line no-shadow
    const handleClick = (event, value, index) => {
        // Persist event propagation
        persistSyntheticEvent(event)

        const newEvent = getEvent(event)

        if (!disabled) {
            setValue(value)

            const container = innerRef.current
            const item = newEvent.target
            const label = item.textContent

            if (onChange) {
                onChange(newEvent, {
                    value,
                    index,
                    container,
                    item,
                    label,
                    text: label,
                    disabled: item.disabled,
                })
            }
        }
    }

    // Convert the basic item list to PaginationItem props objects
    const items = options
        ? options.map(({ label: optionLabel, value: val, ...itemProps }, index) => {
              const itemValue = typeof val !== 'undefined' ? val : String(index)

              const isSelected = Boolean(isValid(value) && itemValue === value)

              return {
                  onClick: (event) => {
                      handleClick(event, itemValue, index)
                  },
                  index,
                  selected: isSelected,
                  'data-selected': isSelected ? 'true' : undefined,
                  disabled,
                  'aria-current': isSelected ? 'true' : undefined,
                  ...itemProps,
                  value: itemValue,
                  children: optionLabel,
                  ref: refs.current && refs.current[index],
              }
          })
        : React.Children.toArray(children).map((item: React.Component<ListOptionProps>, index) => {
              const itemValue = item.props.value ? item.props.value : index

              // eslint-disable-next-line eqeqeq
              const isSelected = Boolean(typeof value === 'number' && itemValue == value)

              const itemProps = (item as React.Component).props

              return {
                  onClick: (event) => {
                      handleClick(event, itemValue, index)
                  },
                  index,
                  selected: isSelected,
                  'data-selected': isSelected ? 'true' : undefined,
                  disabled,
                  'aria-current': isSelected ? 'true' : undefined,
                  ...itemProps,
                  value: itemValue,
                  ref: refs.current && refs.current[index],
              }
          })

    React.useEffect(() => {
        if (valueProp !== undefined && valueProp !== value) {
            setValue(valueProp)

            const item = items.filter((i) => i.value === valueProp)[0]

            if (item) {
                const container = innerRef.current
                const ref = item.ref.current as HTMLButtonElement
                const label = ref.textContent

                if (onChange) {
                    onChange(
                        {
                            target: ref,
                        } as any,
                        {
                            value: item.value,
                            index: item.index,
                            container,
                            item: ref,
                            label,
                            text: label,
                            disabled: item.disabled,
                        },
                    )
                }
            }
        }
    }, [valueProp])

    return {
        refs,
        items,
        ...props,
    } as ListSelectorReturn
}

interface ListSelectorReturn extends UseListSelectorProps {
    refs: React.MutableRefObject<React.RefObject<ListOptionRef>[]>
    items: ListOptionProps[]
}

interface ListOptionInfo {
    container: ListSelectorSingleRef
    item: ListOptionRef
    index: number
    label: string // same as text
    value: any
    text: string // same as label
    disabled: boolean
}

interface ListSelectorOption {
    label?: string
    value?: string | number
    disabled?: boolean
    options?: ListSelectorOption[]
    [key: string]: any
}

type ListSelectorOverrideProps = 'selected' | 'onChange' | 'width'

interface UseListSelectorProps
    extends BackyardBaseProps<ListSelectorSingleRef, ListSelectorOverrideProps> {
    /**
     * Whether or not list item is disabled
     */
    disabled?: boolean
    /**
     * `onChange` function to trigger
     * @argument {React.ChangeEvent} event - DOM Event of `onChange`
     * @argument {ListOptionIfno} info -  Selected list item info
     */
    onChange?: (event: React.ChangeEvent, item: ListOptionInfo) => void
    /**
     * Ref of the container List
     */
    innerref?: React.RefObject<ListSelectorSingleRef>
    /**
     * Value of the list item
     */
    value?: string | number
    /**
     * Forwarded ref from `List`
     */
    innerRef?: React.RefObject<ListSelectorSingleRef>
    /**
     * List of selector options to render as list items
     *
     * Is required if `children` are not defined,
     * Will override `children` if both defined.
     */
    options?: ListSelectorOption[]
}

export { useListSelector }

export type { UseListSelectorProps, ListOptionInfo, ListSelectorOption }

export default useListSelector
