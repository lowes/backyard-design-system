/* eslint-disable jsx-a11y/label-has-associated-control */

import classNames from 'classnames'
import * as React from 'react'

import useRadioGroup from '../RadioGroup/useRadioGroup'
import createChainedFunction from '../utils/functions/createChainedFunction'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import RadioWrapper from './styles/RadioWrapper'

/**
 * Backyard React Radio
 *
 * Radio for interacting with selections in a form.
 *
 * > Note: `name` is required when not a child of `RadioGroup` with a name
 *
 *  <Radio id="radio" />
 *
 * To give `Radio` a label, use `FormControlLabel`, similar to `Checkbox` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Radio id="radio" name="radio" />}
 *      label="Label"
 *  />
 *
 * To give `Radio` helper text, use `FormHelperText` inside a `FormControl`:
 *
 * > Note: When grouping `Radio`s together, use the `RadioGroup` to sync multiple
 * > radios together with one `name`, one `onChange`, and even set a `defaultValue`.
 *
 *  <FormControl>
 *      <FormHeading>What color was Gandalf's robes in LotR?</FormHeading>
 *      <RadioGroup
 *          name="gandalf_robe"
 *          defaultValue="gray"
 *      >
 *          <FormControlLabel
 *              control={<Radio id="radio_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_both" value="both" />}
 *              label="Both"
 *          />
 *      </RadioGroup>
 *      <FormHelperText>Select the right answer</FormHelperText>
 *  </FormControl>
 */
const Radio: BDSForwardRef<RadioProps> = React.forwardRef<RadioRef, RadioProps>(function Radio(
    {
        checked: checkedProp,
        children,
        defaultChecked,
        className,
        disabled,
        id,
        name: nameProp,
        onChange: onChangeProp,
        value,
        wrapperProps,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Radio')

    // Use Radio Group Hook to manage Context of <RadioGroup>
    const radioGroup = useRadioGroup()

    // Chain `checked` and `name` from <RadioGroup>
    let checked = checkedProp
    const onChange = createChainedFunction(onChangeProp, radioGroup?.onChange)
    let name = nameProp

    // If using <RadioGroup>,
    if (radioGroup) {
        // Sync `checked` value from <RadioGroup>
        if (typeof checked === 'undefined' && typeof defaultChecked === 'undefined') {
            checked = radioGroup.value === value
        }

        // Sync `name` value from <RadioGroup>
        if (typeof name === 'undefined') {
            name = radioGroup.name
        }
    }

    /**
     * Layout:
     *
     *  <RadioWrapper>
     *      <input />
     *      <label />
     *  </RadioWrapper>
     */
    return (
        <RadioWrapper {...wrapperProps}>
            <input
                type="radio"
                id={id}
                aria-label={id}
                name={name}
                value={value}
                className={classNames(
                    'backyard',
                    'radio',
                    {
                        checked,
                        disabled,
                    },
                    className,
                )}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
                ref={ref}
                {...props}
            />
            <label htmlFor={id} className="radio-indicator">
                {children}
            </label>
        </RadioWrapper>
    )
})

type RadioRef = HTMLInputElement

interface RadioProps extends BackyardBaseProps<RadioRef> {
    /**
     * Customize a label for the radio input
     */
    children?: React.ReactNode
    /**
     * Whether or not `Radio` is checked
     * Use for a controlled component
     */
    checked?: boolean
    /**
     * Whether or not the radio is checked by default
     * Use for an uncontrolled component
     */
    defaultChecked?: boolean
    /**
     * Whether or not `Radio` is disabled
     */
    disabled?: boolean
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * DOM ID of `input`
     */
    id?: string
    /**
     * DOM Name of `input`
     * Note: Required when NOT a child of `RadioGroup`
     */
    name?: string
    /**
     * `onChange` function triggered when value of `input` changes
     * Chained through `RadioGroup` parent if present
     */
    onChange?: (event: React.FormEvent) => void
    /**
     * Value of `input`
     */
    value?: string
    /**
     * Props to apply to wrapper
     * Useful for setting style of wrapper instead of `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>
}

Radio.bdsName = 'Radio'

export { Radio }

export type { RadioProps, RadioRef }

export default Radio
