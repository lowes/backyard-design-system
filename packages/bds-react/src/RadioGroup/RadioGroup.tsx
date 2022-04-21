import * as React from 'react'

import FormGroup, { FormGroupProps, FormGroupRef } from '../FormGroup'
import useForkRef from '../utils/hooks/useForkRef'
import useControlled from '../utils/hooks/useControlled'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import RadioGroupContext from './RadioGroupContext'
import type { RadioGroupValue } from './RadioGroupContext'

/**
 * Backyard React Radio Group
 *
 * `RadioGroup` allows for grouping radio inputs and syncing them together.
 * It extends from `FormGroup` to provide extra functionality for `Radio` components.
 *
 * For `Checkbox` or `Switch` it is recommended to use `FormGroup`.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading</FormHeading>
 *      <RadioGroup
 *          name="radios"
 *          defaultValue="2"
 *          direction="row"
 *      >
 *          <FormControlLabel
 *              control={<Radio value="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
const RadioGroup: BDSForwardRef<RadioGroupProps> = React.forwardRef<RadioGroupRef, RadioGroupProps>(
    function RadioGroup(
        { children, defaultValue, name, value: valueProp, onChange, ...props },
        ref,
    ) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'RadioGroup')

        // Reference <FormControl>
        const rootRef = React.useRef(null)

        // Use Controlled to manage Uncontrolled behavior of the state of value
        // Determined through default value
        const [value, setValue] = useControlled({
            controlled: valueProp,
            default: defaultValue,
            name: `Backyard->RadioGroup->[name="${name}"]`,
        })

        // Fork forwarded ref and <FormControl> ref
        const handleRef = useForkRef(ref, rootRef)

        /**
         * Handles `onChange` event of `input`
         * Triggers defined `onChange` from props if available
         *
         * @param {Event} event - DOM event
         */
        const handleChange = (event) => {
            // Set value from target
            setValue(event.target.value)

            // If `onChange` prop defined,
            if (onChange) {
                // Trigger `onChange` function
                // Provides `Event` type and current target value
                onChange(event, event.target.value)
            }
        }

        const radioGroupValue: RadioGroupValue = {
            name,
            onChange: handleChange,
            value,
            defaultValue,
        }

        /**
         * Layout:
         *
         *  <RadioGroupContext.Provider>
         *      <FormGroup>
         *          ...
         *      </FormGroup>
         *  </RadioGroupContext.Provider>
         */
        return (
            <RadioGroupContext.Provider value={radioGroupValue}>
                <FormGroup role="radiogroup" ref={handleRef} {...props}>
                    {children}
                </FormGroup>
            </RadioGroupContext.Provider>
        )
    },
)

type RadioGroupRef = FormGroupRef

type RadioGroupOverrideProps = 'onChange'

interface RadioGroupProps extends Omit<FormGroupProps, RadioGroupOverrideProps> {
    /**
     * Children of `RadioGroup`, which have access to `RadioGroupContext`
     * Must contain at least one `Radio` child
     * Does not require `Radio` to be direct children
     */
    children?: React.ReactNode
    /**
     * Default Value of `RadioGroup`
     */
    defaultValue?: string
    /**
     * Required
     * DOM field `name` for all `Radio`s in child tree of `RadioGroup`
     */
    name: string
    /**
     * `onChange` function to trigger when `value` of `RadioGroupContext` changes
     * @argument {Event} event - DOM Event of `onChange`
     * @argument {boolean} value -  Value from DOM Event target
     */
    onChange?: (event: React.ChangeEvent, value: string) => void
    /**
     * Value of `RadioGroupContext`
     * Set by current active `Radio` child of `RadioGroup`
     */
    value?: string
}

RadioGroup.bdsName = 'RadioGroup'

export { RadioGroup }

export type { RadioGroupProps, RadioGroupRef }

export default RadioGroup
