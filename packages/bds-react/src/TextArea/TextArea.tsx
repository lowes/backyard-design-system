import * as React from 'react'
import classNames from 'classnames'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import TextInput from '../TextInput'
import type { TextInputProps, TextInputRef } from '../TextInput'
import FormHelperText from '../FormHelperText'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import TextAreaWrapper from './styles/TextAreaWrapper'

/**
 * Backyard React Text Area
 *
 * Standard text area that extends `TextInput` for functionality.
 * TextArea is different from `TextField`, `Search`, etc. because it is wrapper in `FormControl`
 * in order to place the helper text on the same line as the counter.
 *
 *  <TextArea label="Label" max={500} />
 *
 * To include helper text, use `helperText` prop
 *
 *  <TextArea
 *      label="Comment"
 *      rows={10}
 *      max={2000}
 *      helperText="Type a comment here"
 *  />
 */
const TextArea: BDSForwardRef<TextAreaProps> = React.forwardRef<TextAreaRef, TextAreaProps>(
    function TextArea(
        {
            id,
            className,
            rows = 4,
            max,
            label = 'Label',
            onChange,
            state: stateProp,
            defaultValue,
            value,
            helperText,
            resizer = false,
            type = 'textarea',
            shape: shapeProp, // = 'rounded',
            wrapperProps,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'TextArea',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Count characters
        const [count, setCount] = React.useState(0)
        // Hold state for error or success
        const [state, setState] = React.useState(stateProp || 'default')
        // Hold forwarded ref
        const innerRef = useForwardedRef(ref)

        /**
         * Force event.target to `innerRef`, the text `input`
         *
         * @param {Event} event - DOM Event
         */
        function getEvent<E>(event: E) {
            return event
        }

        /**
         * Handle <textarea /> `onChange` event
         * Updates the current value and checks the length of the value
         * Triggers `onChange` prop function if defined
         *
         * @param {Event} event
         */
        const handleChange = (event: React.ChangeEvent<TextAreaRef>) => {
            // Update count
            setCount(event.target.value.length)

            // If max defined and length of value is greater than,
            if (max && event.target.value.length > max) {
                // Set state to error
                setState('error')
                // Else if state is already error (and not greater than),
            } else if (state === 'error') {
                // Set state back to default
                setState(stateProp || 'default')
            }

            // If `onChange` function defined,
            if (typeof onChange === 'function') {
                // Trigger `onChange`
                onChange(getEvent(event), innerRef.current.value)
            }
        }

        // Side effect for when the `value` or `defaultValue` prop changes...
        React.useEffect(() => {
            // If `value` prop is defined,
            if (typeof value !== 'undefined') {
                // Count new `value` length
                setCount(value.length)
                // Else if `defaultValue` prop changes,
            } else if (typeof defaultValue !== 'undefined') {
                // Count new `defaultValue` length
                setCount(defaultValue.length)
            }
        }, [value, defaultValue])
        // Side effect when stateProp changes...
        React.useEffect(() => {
            // If stateProp defined, and current state does not equal state prop,
            if (stateProp && state !== stateProp) {
                // Force state to be overridden by prop
                setState(stateProp)
            }
        }, [stateProp])

        /**
         * Layout:
         *
         *  <TextAreaWrapper>
         *      <FormControl>
         *          <TextInput />
         *          <div>
         *              <FormHelperText 'helper-text' />
         *              <FormHelperText 'helper-counter' />
         *          </div>
         *      </FormControl>
         *  </TextAreaWrapper>
         */
        return (
            <TextAreaWrapper 
                rows={rows} 
                resize={resizer ? 'vertical' : 'none'}
                max={max}
                {...wrapperProps}
            >
                <TextInput
                    id={id}
                    className={classNames('textarea', className)}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    value={value}
                    state={state}
                    label={label}
                    type={type}
                    rows={rows}
                    shape={shape}
                    {...props}
                    ref={innerRef}
                />
                {max ? (
                    <FormHelperText className={classNames('helper-counter', state)}>
                        {`${count} / ${max}`}
                    </FormHelperText>
                ) : null}
            </TextAreaWrapper>
        )
    },
)

type TextAreaRef = TextInputRef

interface TextAreaProps extends TextInputProps {
    /**
     * Children
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean
    /**
     * Default value of input
     */
    defaultValue?: string
    /**
     * Helper text to display
     */
    helperText?: string
    /**
     * Default number of rows to show, changes default height
     */
    rows?: number
    /**
     * Maximum number of characters allowed
     * When defined, text area will show character count
     */
    max?: number
    /**
     * Whether or not resizer is present
     */
    resizer?: boolean
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared'
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success'
    /**
     * Type of text input
     */
    type?: string
    label?: string
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement> & { rows?: number }
}

TextArea.bdsName = 'TextArea'

export { TextArea }

export type { TextAreaProps, TextAreaRef }

export default TextArea
