import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import ListOption from '../ListOption'
import type { ListOptionProps, ListOptionRef } from '../ListOption'
import { useGlobalKeyDown, keycode } from '../utils/hooks/useKeyDown'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'

import ListSelectorSingleWrapper from './styles/ListSelectorSingleWrapper'
import useListSelector from './useListSelector'
import type { ListSelectorOption, UseListSelectorProps } from './useListSelector'
import clampOption from './utils/clampOption'

/**
 * Backyard React List Selector Single
 *
 * @internal
 *
 * Single selection list handler component
 */
const ListSelectorSingle: BDSForwardRef<ListSelectorSingleProps> = React.forwardRef<
    ListSelectorSingleRef,
    ListSelectorSingleProps
>(function ListSelectorSingle(props, ref) {
    const {
        children,
        className,
        id,
        enableGlobalKeyDown = false,
        // eslint-disable-next-line no-shadow
        renderItem = (props, ref) => {
            return <ListOption {...props} ref={ref} />
        },
        width = 'auto',
        shape,
        defaultValue,
        value: valueProp,
        ...other
    } = props

    const innerRef = useForwardedRef(ref)

    const [focusedOption, setFocusedOptionState] = React.useState(-1)
    const [value, setValue] = React.useState(valueProp || defaultValue)

    const { items, refs } = useListSelector({
        ...props,
        value,
        innerRef,
    })

    const selectFocusedOption = () => {
        const focusedItem = items[focusedOption] as ListOptionProps

        if (focusedItem) {
            setValue(focusedItem.value)
        }
    }

    /**
     * Logic to handle setting currently focused option
     *
     * @param type
     */
    const setFocusedOption = (type) => {
        // Set new focused option
        setFocusedOptionState((option) => {
            // Clamp new option
            const newOption = clampOption(type, option, items as ListSelectorOption[])
            // Look ahead to next option for scrolling
            const lookaheadOption = clampOption(type, option, items as ListSelectorOption[])

            // Get lookahead option
            const listOption = refs.current?.[lookaheadOption]?.current

            // Scroll option into view
            listOption?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })

            return newOption
        })
    }

    useGlobalKeyDown(enableGlobalKeyDown, {
        [keycode.ArrowUp]: () => setFocusedOption('decrement'),
        [keycode.ArrowDown]: () => setFocusedOption('increment'),
        [keycode.Enter]: () => selectFocusedOption(),
        [keycode.Space]: () => selectFocusedOption(),
        [keycode.Home]: () => setFocusedOption('first'),
        [keycode.End]: () => setFocusedOption('last'),
    })

    const focusedItem = items[focusedOption] as ListOptionProps

    if (focusedItem) {
        focusedItem.className = classNames(focusedItem.className, 'focus')
    }

    // Side effect for when `value` is modified externally...
    React.useEffect(() => {
        // If `value` is not already given,
        if (valueProp !== value) {
            // Set new value
            setValue(valueProp)
        }
    }, [valueProp])

    /**
     * Layout:
     *
     *  <ListContext.Provider>
     *      <ul>
     *          ...
     *      </ul>
     *  </ListContext.Provider>
     */
    return (
        <ListSelectorSingleWrapper
            id={id}
            className={classNames(
                'list',
                'list-selector',
                'single-selector',
                `shape--${shape}`,
                className,
            )}
            ref={innerRef}
            width={width}
            {...other}
        >
            {items.map((item, index) =>
                renderItem(
                    {
                        key: index,
                        shape: 'squared',
                        ...item,
                    } as ListOptionProps,
                    item.ref as React.Ref<ListOptionRef>,
                ),
            )}
        </ListSelectorSingleWrapper>
    )
})

type ListSelectorSingleRef = HTMLUListElement

type ListSelectorSingleOverrideProps = 'selected' | 'onChange' | 'onClick' | 'value' | 'width'

interface ListSelectorSingleProps
    extends BackyardBaseProps<ListSelectorSingleRef, ListSelectorSingleOverrideProps>,
        UseListSelectorProps {
    /**
     * Enables the global key down listener to listen for arrow key interactions
     */
    enableGlobalKeyDown?: boolean
    /**
     * List item to render
     */
    renderItem?: (props: ListOptionProps, ref?: React.Ref<any>) => React.ReactElement
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string
    /**
     * Default value of the list selector
     */
    defaultValue?: string | number
    /**
     * Value of the list selector
     */
    value?: string | number
    /**
     * Shape of the list
     */
    shape?: 'rounded' | 'squared'
}

export { ListSelectorSingle }

export type { ListSelectorSingleProps, ListSelectorSingleRef }

export default ListSelectorSingle
