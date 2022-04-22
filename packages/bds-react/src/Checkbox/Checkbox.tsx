/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import classNames from 'classnames'

import Check from '@lowes-tech/bds-icons/Checkmark'
import Line from '@lowes-tech/bds-icons/Minus'
import type { PathIconProps } from '@lowes-tech/bds-icons/components/PathIcon'

import useControlled from '../utils/hooks/useControlled'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import CheckboxWrapper from './styles/CheckboxWrapper'

/**
 * Backyard React Checkbox
 *
 * Checkbox for interacting with boolean values in a form.
 *
 *  <Checkbox id="checkbox" />
 *
 * To give `Checkbox` a label, use `FormControlLabel`, similar to `Radio` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Checkbox id="checkbox" />}
 *      label="Label"
 *  />
 *
 * To give `Checkbox` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
const Checkbox: BDSForwardRef<CheckboxProps> = React.forwardRef<CheckboxRef, CheckboxProps>(
    function Checkbox(
        {
            id,
            name,
            value,
            checked: checkedProp,
            defaultChecked,
            disabled = false,
            indeterminate = false,
            checkedIcon = Check,
            indeterminateIcon = Line,
            className,
            onChange,
            shape: shapeProp, // = 'rounded',
            wrapperProps,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'Checkbox',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Use Controlled to manage Uncontrolled behavior of the state of `checked`
        // Determined through default checked
        const [checked, setChecked] = useControlled<CheckboxProps['checked']>({
            controlled: checkedProp,
            default: defaultChecked,
            name: `Backyard->Checkbox->[id="${id}"]`,
        })

        /**
         * Handles `onChange` event of `input`
         * Triggers defined `onChange` from props if available
         *
         * @param {Event} event - DOM event
         */
        const handleChange = (event: React.ChangeEvent<CheckboxRef>) => {
            // Set `checked` to `event.target`'s
            setChecked(event.target.checked)

            // If `onChange` prop defined,
            if (onChange) {
                // Trigger `onChange` prop function
                onChange(event, event.target.checked)
            }
        }

        // Icon component depending on indeterminate state
        const Icon = React.useMemo(() => (
            (
                indeterminate
                    ? indeterminateIcon
                    : checkedIcon
            ) as React.ComponentClass<PathIconProps>
        ), [indeterminate])

        // Render mark depending on checked and indeterminate state
        const mark = React.useMemo(() => (
            checked
                ? (
                    <Icon
                        color="var(--bds-color-icon-solid-inverse)"
                        size="var(--bds-sizes-size-12)"
                        className={classNames(
                            'checkbox-icon',
                            indeterminate
                                ? 'checkbox-line'
                                : 'checkbox-mark'
                        )}
                    />
                )
                : null
        ), [checked, indeterminate])

        /**
         * Layout:
         *
         *  <CheckboxWrapper>
         *      <input />
         *      <label />
         *  </CheckboxWrapper>
         */
        return (
            <CheckboxWrapper indeterminate={indeterminate} {...wrapperProps}>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    className={classNames(
                        'backyard',
                        'checkbox',
                        `shape--${shape}`,
                        {
                            checked,
                            disabled,
                            indeterminate,
                        },
                        className,
                    )}
                    checked={checked}
                    data-indeterminate={indeterminate}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    ref={ref}
                    {...props}
                />
                <label
                    className="checkbox-label"
                    htmlFor={id}
                >
                    {mark}
                </label>
            </CheckboxWrapper>
        )
    },
)

type CheckboxRef = HTMLInputElement

type CheckboxOverrideProps = 'onChange'

interface CheckboxProps extends BackyardBaseProps<CheckboxRef, CheckboxOverrideProps> {
    /**
     * DOM ID for `input`
     */
    id?: string
    /**
     * DOM Name for `input`
     */
    name?: string
    /**
     * Value for `input`
     */
    value?: string
    /**
     * Checked value for `input`
     * Uses controlled `checked` when defined
     */
    checked?: boolean
    /**
     * Checked value for `input` by default
     * Uses uncontrolled `checked` when defined
     */
    defaultChecked?: boolean
    /**
     * Whether or not `Checkbox` is disabled
     */
    disabled?: boolean
    /**
     * Whether or not `input` is indeterminate
     */
    indeterminate?: boolean
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM event
     * @argument {boolean} checked - Whether or not `input` is checked
     */
    onChange?: (event: React.ChangeEvent, checked: boolean) => void
    /**
     * Shape of `Checkbox`
     * Rounded -> Medium Border Radius
     * Squared -> (Default) No Border Radius
     */
    shape?: 'rounded' | 'squared'
    /**
     * Props to extend `CheckboxWrapper` with
     * Useful for setting `style` of `CheckboxWrapper` instead of styling the `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>
    checkedIcon?: React.ComponentClass
    indeterminateIcon?: React.ComponentClass
}

Checkbox.bdsName = 'Checkbox'

export { Checkbox }

export type { CheckboxProps, CheckboxRef }

export default Checkbox
