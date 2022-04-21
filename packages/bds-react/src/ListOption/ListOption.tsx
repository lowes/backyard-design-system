import * as React from 'react'
import classNames from 'classnames'

import Button from '../Button'
import type { ButtonProps, ButtonRef } from '../Button'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import ListOptionWrapper from './styles/ListOptionWrapper'

/**
 * Backyard React List Option
 *
 * `ListOption` provides an option for `List` in the form of a custom button.
 *
 * Example:
 * ```
 *  <ListOption
 *      icon={<Location />}
 *  >
 *      New York
 *  </ListOption>
 * ```
 */
const ListOption: BDSForwardRef<ListOptionProps> = React.forwardRef<ListOptionRef, ListOptionProps>(
    function ListOption(
        {
            children,
            className,
            component: Component = Button as any,
            disabled = false,
            selected = false,
            size = 'normal',
            shape, // = 'rounded',
            icon: iconProp,
            onSelect,
            onDeselect,
            value,
            label,
            ...props
        },
        ref,
    ) {
        // Hold the state of the previously selected state
        const [isSelected, setIsSelected] = React.useState(selected)

        // Memoize option values...
        const option = React.useMemo(
            () => ({
                disabled,
                selected,
                value,
                label,
            }),
            [],
        )

        // Clone given icon
        const icon = React.useMemo(
            () =>
                iconProp
                    ? React.cloneElement(iconProp, {
                          className: 'list-option-icon',
                      })
                    : null,
            [iconProp],
        )

        // Side effect for when option is selected/deselected
        React.useEffect(() => {
            // If selected state is changing,
            if (selected !== isSelected) {
                // If selected,
                if (selected) {
                    if (onSelect) {
                        // Trigger onSelect
                        onSelect(option)
                    }
                } else if (onDeselect) {
                    // Trigger onDeselect
                    onDeselect(option)
                }

                // Set new selected state
                setIsSelected(selected)
            }
        }, [selected])

        return (
            <ListOptionWrapper>
                <Component
                    className={classNames(
                        'list-option',
                        `size--${size}`,
                        {
                            disabled,
                            selected,
                        },
                        className,
                    )}
                    disabled={disabled}
                    variant={selected ? 'tertiary' : 'ghost'}
                    color={selected ? 'interactive' : 'neutral'}
                    shape={shape}
                    {...props}
                    ref={ref}
                >
                    {icon || null}
                    <span className="list-label">{children}</span>
                </Component>
            </ListOptionWrapper>
        )
    },
)

/**
 * Option info provided for event triggers
 */
interface ListOptionValues {
    /**
     * Whether the option is disabled
     */
    disabled: ListOptionProps['disabled']
    /**
     * Whether the option is selected
     */
    selected: ListOptionProps['selected']
    /**
     * Value of the option
     */
    value: ListOptionProps['value']
    /**
     * Label of the option
     */
    label: ListOptionProps['label']
}

type ListOptionRef = ButtonRef

type ListOptionOverrideProps = 'size' | 'onSelect' | 'onDeselect'

interface ListOptionProps extends BackyardBaseProps<ListOptionRef, ListOptionOverrideProps> {
    /**
     * Component wrapper of the list item
     * Can be an HTML tag (`li`) or component
     */
    component?: React.ComponentClass | any
    /**
     * Whether or not the list item is disabled for selecting
     */
    disabled?: boolean
    /**
     * Icon Component to place in list item
     */
    icon?: React.ReactElement
    /**
     * Whether or not the list item is selected
     */
    selected?: boolean
    /**
     * Value of list item
     */
    value?: string
    /**
     * The size of component
     */
    size?: 'normal' | 'condensed' | ButtonProps['size']
    /**
     * The shape of the list option
     */
    shape?: 'rounded' | 'squared'
    /**
     * Triggers when the list option is selected
     */
    onSelect?: (option: ListOptionValues) => void
    /**
     * Triggers when the list option is deselected
     */
    onDeselect?: (option: ListOptionValues) => void
}

ListOption.bdsName = 'ListOption'

export { ListOption }

export { ListOptionProps, ListOptionRef, ListOptionValues }

export default ListOption
