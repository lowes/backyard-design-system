import * as React from 'react'
import classNames from 'classnames'

import CloseCircleFilled from '@lowes-tech/bds-icons/CloseCircleFilled'
import Checkmark from '@lowes-tech/bds-icons/Checkmark'

import includes from 'core-js-pure/stable/array/includes'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import useControlled from '../utils/hooks/useControlled'
import useForkRef from '../utils/hooks/useForkRef'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import ChipBase from './styles/ChipBase'

/**
 * Backyard React Chip
 *
 * Chip is used to interact with two different types of values in a form:
 *      1. Boolean
 *      2. String Selections
 *
 * > Note: Requires uniquely assigned `id` prop
 * > Note: `label` is always required
 * > Note: `name` is required when `type` is `choice`
 *
 *  <Chip type="filter" id="filter" label="Filter Chip" />
 *  <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *  <Chip type="input" id="input" label="Input Chip" />
 *
 * To group `Chip`s horizontally or vertically, use `FormGroup`:
 *
 *  <FormControl>
 *      <FormHeading>Here's some Chips</FormHeading>
 *      <FormGroup
 *          direction="row"
 *      >
 *          <Chip type="filter" id="filter" label="Filter Chip" />
 *          <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *          <Chip type="input" id="input" label="Input Chip" />
 *      </FormGroup>
 *      <FormHelperText>Some Helper Text</FormHelperText>
 *  </FormControl>
 */
const Chip: BDSForwardRef<ChipProps> = React.forwardRef<ChipRef, ChipProps>(function Chip(
    {
        className,
        checked: checkedProp,
        defaultChecked,
        disabled = false,
        icon: iconProp,
        id = '',
        label,
        name,
        onChange,
        onClick,
        onDelete,
        onKeyUp,
        onKeyDown,
        onFocus,
        value,
        variant = 'filter',
        subdued = false,
        wrapperProps = {},
        ...other
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    // Validate Backyard theme hook
    validateBackyardTheme(theme, 'Chip')

    // Use Controlled to manage Uncontrolled behavior of the state of `checked`
    // Determined through default checked
    const [checked, setChecked] = useControlled({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: `Backyard->Chip[type="${variant}"]->[id="${id}"]`,
    })
    // `input` ref for `Chip`
    const chipRef = React.useRef(null)
    // Fork forwarded `ref` from `chipRef` so it can be used internally
    const handleRef = useForkRef(chipRef, ref)
    // State of whether or not `Chip` exists (for input chips)
    const [exists, setExists] = React.useState(true)

    /**
     * Handles `onClick` event of `input`
     * Triggers defined `onDelete` from props if available and of `type` === 'input'
     * Triggers defined `onClick` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleClick = (event: ChipEvent): void => {
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation()

        // If disabled,
        if (disabled) {
            // Don't trigger
            return
        }

        // If 'input' type,
        if (variant === 'input') {
            // Remove chip from existence
            setExists(false)

            // If `onDelete` prop function defined,
            if (onDelete) {
                // Trigger `onDelete` prop function, passing `Event` argument
                onDelete(event, {
                    checked: chipRef.current.checked,
                    value: chipRef.current.value,
                })
            }
        }

        // If `onClick` prop function defined,
        if (onClick) {
            // Trigger `onClick` prop function, passing `Event` argument
            onClick(event as React.MouseEvent, {
                checked: chipRef.current.checked,
                value: chipRef.current.value,
            })
        }
    }

    /**
     * Handles `onKeyDown` event of `input`
     * Triggers defined `onKeyDown` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleKeyDown = (event: React.KeyboardEvent<ChipRef>): void => {
        // If not disabled,
        if (!disabled) {
            // Get key from event
            const { key } = event

            // If space or enter key pressed,
            if (includes([' ', 'Enter'], key)) {
                // Prevent default
                event.preventDefault()

                // If `onKeyDown` prop defined,
                if (onKeyDown) {
                    // Trigger `onKeyDown` prop function
                    onKeyDown(event, {
                        checked: chipRef.current.checked,
                        value: chipRef.current.value,
                    })
                }
            }
        }
    }

    /**
     * Handles `onKeyUp` event of `input`
     * Triggers defined `onKeyUp` from props if available
     * Triggers defined `onDelete` from props if available and `type` === 'input'
     *
     * @param {Event} event - DOM event
     */
    const handleKeyUp = (event: React.KeyboardEvent<ChipRef>): void => {
        // If disabled,
        if (disabled) {
            // Don't trigger
            return
        }

        if (onKeyUp) {
            onKeyUp(event, {
                checked: chipRef.current.checked,
                value: chipRef.current.value,
            })
        }

        // Ignore events from children of `Chip`.
        if (event.currentTarget !== event.target) {
            return
        }

        const { key } = event
        // If 'input' type and Backspace or Delete key pressed,
        if (variant === 'input' && (key === 'Backspace' || key === 'Delete')) {
            // Remove chip from existence
            setExists(false)

            // If `onDelete` prop function defined,
            if (onDelete) {
                // Trigger `onDelete` prop function, passing `Event` argument
                onDelete(event, {
                    checked: chipRef.current.checked,
                    value: chipRef.current.value,
                })
            }
            // Else, if escape key pressed,
        } else if (key === 'Escape' && chipRef.current) {
            // Remove focus from chip
            chipRef.current.blur()
        }
    }

    /**
     * Handles `onChange` event of `input`
     * Triggers defined `onChange` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleChange = (event: React.ChangeEvent<ChipRef>): void => {
        // If disabled,
        if (disabled) {
            // Don't trigger
            return
        }

        // Set `checked` value to target's
        setChecked(event.target.checked)

        if (typeof onChange === 'function') {
            // Trigger `onDelete` prop function, passing `Event` argument
            onChange(event, {
                checked: chipRef.current.checked,
                value: chipRef.current.value,
            })
        }
    }

    /**
     * Handles `onFocus` event of `input`
     * Triggers defined `onFocus` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleFocus = (event: React.FocusEvent<ChipRef>): void => {
        // If not disabled,
        if (!disabled) {
            // If `onFocus` prop defined,
            if (onFocus) {
                // Trigger `onFocus` prop function
                onFocus(event, {
                    checked: chipRef.current.checked,
                    value: chipRef.current.value,
                })
            }
        }
    }

    // Define delete icon if 'input' type `Chip`...
    const deleteIcon = includes(['input'], variant) ? (
        <CloseCircleFilled className="chip--delete" />
    ) : null

    // Define main icon if 'filter' type `Chip` and checked...
    const icon =
        includes(['filter'], variant) && checked ? (
            <Checkmark className="chip--icon" />
        ) : // Define main icon if 'input' type `Chip` and icon provided...
        includes(['input'], variant) && iconProp && React.isValidElement(iconProp) ? (
            // Clone icon node to add className
            React.cloneElement(iconProp, {
                className: classNames('chip--icon', iconProp.props.className),
            })
        ) : null

    // If chip doesn't exist,
    if (!exists) {
        // Don't render it!
        return null
    }

    /**
     * Layout:
     *
     *  <ChipBase>
     *      <input />
     *      <label>
     *          <icon (main) />
     *          <span (label) />
     *          <icon (delete) />
     *      </label>
     *  </ChipBase>
     */
    return (
        <ChipBase
            {...wrapperProps}
            className={classNames(
                'backyard',
                'chip',
                `variant--${variant}`,
                {
                    checked,
                    disabled,
                    deletable: onDelete,
                },
                wrapperProps.className,
            )}
        >
            <input
                type={variant === 'choice' ? 'radio' : 'checkbox'}
                role={variant === 'choice' ? 'radio' : 'checkbox'}
                id={id}
                className={classNames('chip--input', className)}
                name={name}
                value={value}
                checked={checkedProp}
                defaultChecked={defaultChecked}
                aria-disabled={disabled ? true : undefined}
                disabled={disabled}
                onChange={handleChange}
                onClick={handleClick}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                ref={handleRef}
                {...other}
            />
            <label 
                htmlFor={id}
                className={classNames(
                    'chip--label',
                    (subdued) ? 'subdued' : ''
                )}
            >
                {icon}
                <span className="label">{label}</span>
                {deleteIcon}
            </label>
        </ChipBase>
    )
})

type ChipRef = HTMLInputElement

type ChipOverrideProps = 'onFocus' | 'onChange' | 'onClick' | 'onKeyDown' | 'onKeyUp'

interface ChipProps extends BackyardBaseProps<ChipRef, ChipOverrideProps> {
    /**
     * DOM Class Name of `input`
     */
    className?: string
    /**
     * Whether or not `input` is checked
     * Uses controlled `checked` value if defined
     */
    checked?: boolean
    /**
     * Whether or not `input` id checked by default
     * Uses uncontrolled `checked` value if defined
     */
    defaultChecked?: boolean
    /**
     * Whether or not `input` is disabled
     */
    disabled?: boolean
    /**
     * Main icon for `input` type `Chip`
     * Does not render on any other type
     */
    icon?: React.ReactNode
    /**
     * DOM ID of `input`
     */
    id?: string
    /**
     * Required
     * Label text of `Chip`
     */
    label: string
    /**
     * DOM Name of `input`
     * Required for choice chips to sync
     */
    name?: string
    /**
     * `onChange` trigger function when `input` value is changed
     * @argument {React.ChangeEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onChange?: (event: React.ChangeEvent, info: ChipEventInfo) => void
    /**
     * `onClick` trigger function when `Chip` is clicked
     * @argument {React.MouseEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onClick?: (event: React.MouseEvent, info: ChipEventInfo) => void
    /**
     * `onDelete` trigger function when 'input' type `Chip` is deleted
     * @argument {ChipEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onDelete?: (event: ChipEvent, info: ChipEventInfo) => void
    /**
     * `onKeyUp` trigger function when key is pressed and released on `Chip`
     * @argument {React.KeyboardEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onKeyUp?: (event: React.KeyboardEvent, info: ChipEventInfo) => void
    /**
     * `onKeyDown` trigger function when key is pressed and released on `Chip`
     * @argument {React.KeyboardEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onKeyDown?: (event: React.KeyboardEvent, info: ChipEventInfo) => void
    /**
     * `onKeyUp` trigger function when key is pressed and released on `Chip`
     * @argument {React.FocusEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onFocus?: (event: React.FocusEvent, info: ChipEventInfo) => void
    /**
     * Type of `Chip` to render
     * Choice -> Similar to Radio Input, can only have one selected for a given set of equivalent names
     * Filter -> Similar to Checkboxes, can select as many with a given set of names as desired
     * Input -> Chip contains a given value, and when activated, will be removed from the form
     */
    variant?: 'choice' | 'filter' | 'input'
    /**
     * Value of `input`
     */
    value?: string
    /**
     * Props to extend `ChipBase` with
     * Useful for setting `style` of `ChipBase` instead of `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>
    /** 
     * Whether to use the subdued interactive color
     */
    subdued?: boolean
}

type ChipEvent = React.MouseEvent | React.KeyboardEvent | React.FocusEvent

interface ChipEventInfo {
    /**
     * Whether or not Chip is checked
     */
    checked: boolean
    /**
     * Value of Chip
     */
    value: string
}

Chip.bdsName = 'Chip'

export { Chip }

export type { ChipProps, ChipRef }

export default Chip
