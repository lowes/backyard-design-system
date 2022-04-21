/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import classNames from 'classnames'

import useControlled from '../utils/hooks/useControlled'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import SwitchWrapper from './styles/SwitchWrapper'

/**
 * Backyard React Switch
 *
 * Switch for interacting with boolean values in a form.
 *
 *  <Switch id="switch" />
 *
 * To give `Switch` a label, use `FormControlLabel`, similar to `Radio` and `Checkbox`:
 *
 *  <FormControlLabel
 *      control={<Switch id="switch" />}
 *      label="Label"
 *  />
 *
 * To give `Switch` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Switch id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
const Switch: BDSForwardRef<SwitchProps> = React.forwardRef<SwitchRef, SwitchProps>(function Switch(
    {
        id,
        name,
        size = 'large',
        value,
        checked: checkedProp,
        defaultChecked,
        disabled = false,
        className,
        onChange,
        wrapperProps,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Switch')

    // Use Controlled to manage Uncontrolled behavior of the state of checked
    // Determined through defaultChecked
    const [checked, setChecked] = useControlled({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: `Backyard->Switch->[id="${id}"]`,
    })

    /**
     * Handles `onChange` event of `input`
     * Triggers defined `onChange` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleChange = (event) => {
        // Set checked value to target
        setChecked(event.target.checked)

        // If `onChange` prop defined,
        if (onChange) {
            // Trigger `onChange` function
            // Provides `Event` argument and checked boolean
            onChange(event, event.target.checked)
        }
    }

    /**
     * Layout:
     *
     *  <SwitchWrapper>
     *      <input />
     *      <label />
     *  </SwitchWrapper>
     */
    return (
        <SwitchWrapper 
            className={classNames("switch--wrapper", `size--${size}`)}
            {...wrapperProps}
        >
            <input
                type="checkbox"
                id={id}
                aria-label={value}
                name={name}
                value={value}
                className={classNames(
                    'backyard',
                    'switch',
                    `size--${size}`,
                    {
                        checked,
                        disabled,
                    },
                    className,
                )}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={handleChange}
                ref={ref}
                {...props}
            />
            <label htmlFor={id} />
        </SwitchWrapper>
    )
})

type SwitchRef = HTMLInputElement

type SwitchOverrideProps = 'onChange' | 'size'

interface SwitchProps extends BackyardBaseProps<SwitchRef, SwitchOverrideProps> {
    /**
     * DOM ID of `input`
     */
    id?: string
    /**
     * DOM Name for `input`
     */
    name?: string
    /** 
     * Size of the switch 
     */
    size?: 'large' | 'small'
    /**
     * Value of `Switch`
     * Useful for forms if something other than a boolean is needed when checked
     */
    value?: string
    /**
     * Whether or not `Switch` is checked
     * Uses controlled `checked` if set
     */
    checked?: boolean
    /**
     * Whether or not `Switch` is checked by default
     * Uses uncontrolled `checked` if set
     */
    defaultChecked?: boolean
    /**
     * Whether or not `Switch` is disabled
     */
    disabled?: boolean
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * `onChange` function triggered on `input`'s onChange DOM event
     * @argument {Event} event - DOM event, `event.target` always set to `input` ref
     * @argument {boolean} checked - `checked` value from `event.target`
     */
    onChange?: (event: React.ChangeEvent, checked: boolean) => void
    /**
     * Props to extend `SwitchWrapper` with
     * Useful for setting `style` overrides for `SwitchWrapper` instead of `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>
}

Switch.bdsName = 'Switch'

export { Switch }

export type { SwitchProps, SwitchRef }

export default Switch
