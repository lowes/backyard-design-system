import * as React from 'react'
import classNames from 'classnames'
import CheckCircleFilled from '@lowes-tech/bds-icons/CheckCircleFilled'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import useRandomId from '../utils/hooks/useRandomId'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import useFormControl from '../FormControl/hooks/useFormControl'

import TextInputWrapper from './styles/TextInputWrapper'
import TextInputLabel from './styles/TextInputLabel'
import TextInputFieldset from './styles/TextInputFieldset'
import TextInputFormControl from './styles/TextInputFormControl'

// Check validity of value
const valid = (value) => !(value === null || value === undefined || value === '')

/**
 * Backyard React Text Input
 *
 * Internal TextInput component that `TextField`, `Search`, `Password`, and `TextArea` extends off of
 *
 * Provides API for easily building more common styled text inputs
 *
 * It is recommended to use the above components before utilizing `TextInput` directly
 */
const TextInput: BDSForwardRef<TextInputProps> = React.forwardRef<TextInputRef, TextInputProps>(
    function TextInput(
        {
            children,
            className,
            component,
            defaultValue,
            disabled: disabledProp = false,
            size: sizeProp = 'medium',
            itemBefore,
            itemAfter,
            id: idProp,
            customIcon = false,
            hiddenLabel = false,
            label,
            onChange,
            onClick,
            onFocus,
            onBlur,
            placeholder,
            shape: shapeProp, // = 'rounded',
            state: stateProp = 'default',
            type = 'text',
            value: valueProp,
            suffix,
            wrapperProps,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'TextInput',
        }).context

        // Controlled value
        const [value, setValue] = React.useState(valid(valueProp) ? valueProp : defaultValue)

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Assign random id to input
        // if id not provided
        // Accessibilty for label -> input
        const id = useRandomId(idProp)

        // Hold interaction state
        const [interaction, setInteraction] = React.useState(
            valid(value) ? 'completed' : 'incomplete',
        )
        // Hold completion state
        const [completed, setCompleted] = React.useState(
            valid(value) ? 'completed' : 'incomplete',
        )
        // Hold inner ref to force event target to
        const innerRef = useForwardedRef(ref)

        // Uses FormControl
        const { disabled: controlDisabled, state: controlState } = useFormControl({
            disabled: disabledProp,
            state: stateProp,
            indent: 'size_16',
        })

        // Memoize contextual props...
        const { size, state, disabled } = React.useMemo(
            () => ({
                size: sizeProp,
                // Allow FormControl to override props
                state: controlState || stateProp,
                disabled: controlDisabled || disabledProp,
            }),
            [sizeProp, stateProp, disabledProp],
        )

        // Value Prop side effects...
        React.useEffect(() => {
            // Set new controlled value
            if (valueProp !== value) {
                setValue(valid(valueProp) ? valueProp : defaultValue)
            }
        }, [valueProp])

        /**
         * Force event.target to `innerRef`, the text `input`
         *
         * @param {Event} event - DOM Event
         */
        function getEvent<E>(event: E) {
            return event
        }

        /**
         * Handles `onChange` event for ``input``
         *
         * @param {Event} event - DOM Event
         */
        const handleChange = (event) => {
            // @TODO remove evet.persisten when updating to react@17
            // react@17 remove event pooling
            if (event?.persist) {
                event.persist()
            }

            // Set focused interaction
            setInteraction('focused')

            // Set new controlled value
            setValue(event.target.value)

            // If `onChange` prop defined,
            if (typeof onChange === 'function') {
                // Trigger function
                onChange(getEvent(event), event.target.value)
            }
        }

        /**
         * Handles `onFocus` event for ``input``
         *
         * @param {Event} event - DOM Event
         */
        const handleFocus = (event) => {
            // @TODO remove evet.persisten when updating to react@17
            // react@17 remove event pooling
            if (event?.persist) {
                event.persist()
            }

            // Set focused interaction
            setInteraction('focused')

            // If `onFocus` prop defined,
            if (typeof onFocus === 'function') {
                // Trigger function
                onFocus(getEvent(event), event.target.value)
            }
        }

        /**
         * Handles `onClick` event for ``input``
         *
         * @param {Event} event - DOM Event
         */
        const handleClick = (event) => {
            // @TODO remove evet.persisten when updating to react@17
            // react@17 remove event pooling
            if (event?.persist) {
                event.persist()
            }

            // Set active interaction
            setInteraction('active')

            // If `onClick` prop defined,
            if (typeof onClick === 'function') {
                // Trigger function
                onClick(getEvent(event), event.target.value)
            }
        }

        /**
         * Handles `onBlur` event for ``input``
         *
         * @param {Event} event - DOM Event
         */
        const handleBlur = (event) => {
            // @TODO remove evet.persisten when updating to react@17
            // react@17 remove event pooling
            if (event?.persist) {
                event.persist()
            }

            if (event.target.value && event.target.value !== '') {
                setInteraction('completed')
            } else {
                setInteraction('incomplete')
            }
            // If `onBlur` prop defined,
            if (typeof onBlur === 'function') {
                // Trigger function
                onBlur(getEvent(event), event.target.value)
            }
        }

        // Side effect when value changes
        React.useEffect(() => {
            // Set whether or not input is complete
            setCompleted(innerRef.current?.value ? 'completed' : 'incomplete')
        }, [innerRef.current?.value, value])

        // Get HTML tag from `type` prop or use `input` by default
        const Component = component || (type === 'textarea' ? 'textarea' : 'input')

        let ItemAfter

        if (state === 'success') {
            ItemAfter = <CheckCircleFilled className="icon--success" />
        } else {
            ItemAfter = itemAfter
        }

        /**
         * Layout:
         *
         *  <div>
         *      <label/>
         *      <div>
         *          <input />
         *          <fieldset>
         *              <legend>
         *                  <span />
         *              </legend>
         *          </fieldset>
         *      </div>
         *  </div>
         *
         */
        return (
            <TextInputWrapper
                customIcon={customIcon}
                {...wrapperProps}
                className={classNames(
                    'backyard',
                    'textinput--wrapper',
                    `shape--${shape}`,
                    `size--${size}`,
                    state !== 'default' ? `state--${state}` : '',
                    placeholder ? 'has--placeholder' : '',
                    itemBefore ? 'item--before' : '',
                    itemAfter ? 'item--after' : '',
                    interaction ? `interaction--${interaction}` : '',
                    wrapperProps ? wrapperProps.className : '',
                )}
            >
                <TextInputLabel
                    htmlFor={id}
                    className={classNames(
                        'input-label',
                        `size--${size}`,
                        `state--${state}`,
                        interaction ? `interaction--${interaction}` : '',
                        itemBefore ? 'with-icon-before' : '',
                        { 'hidden-label': hiddenLabel },
                    )}
                >
                    {label}
                </TextInputLabel>

                <TextInputFormControl
                    className={classNames(
                        'form-control',
                        `shape--${shape}`,
                        `size--${size}`,
                        { disabled },
                        state !== 'default' ? `state--${state}` : '',
                        interaction ? `interaction--${interaction}` : '',
                    )}
                >
                    {itemBefore
                        ? React.cloneElement(itemBefore, {
                              className: classNames(itemBefore.props.className, 'item--before'),
                          })
                        : null}
                    <Component
                        type={type}
                        id={id}
                        className={classNames(
                            'textinput',
                            `type--${type}`,
                            { disabled },
                            className,
                            completed,
                        )}
                        value={valid(value) ? value : ''}
                        disabled={disabled || null}
                        data-invalid={state === 'error' || null}
                        aria-invalid={state === 'error' || null}
                        ref={innerRef}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onClick={handleClick}
                        placeholder={placeholder}
                        {...props}
                    />
                    {ItemAfter
                        ? React.cloneElement(ItemAfter, {
                              className: classNames(ItemAfter.props.className, 'item--after'),
                          })
                        : null}
                    {suffix ? <div className="suffix">{suffix}</div> : null}
                    <TextInputFieldset
                        className={classNames(
                            'text-input-fieldset',
                            interaction ? `interaction--${interaction}` : '',
                            `size--${size}`,
                        )}
                        aria-hidden
                    >
                        {label && !hiddenLabel ? (
                            <legend>
                                <span>{label}</span>
                            </legend>
                        ) : null}
                    </TextInputFieldset>
                </TextInputFormControl>
            </TextInputWrapper>
        )
    },
)

type TextInputRef = HTMLInputElement

type TextInputOverrideProps = 'onChange' | 'onClick' | 'onFocus' | 'onBlur' | 'size'

interface TextInputProps<T = TextInputRef> extends BackyardBaseProps<T, TextInputOverrideProps> {
    /**
     * Component to render text input with
     */
    component?: React.ElementType | string
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean
    /**
     * Default value of input
     */
    defaultValue?: string
    /**
     * Icon displayed before text input
     */
    itemBefore?: React.ReactElement
    /**
     * Icon displayed after text input
     */
    itemAfter?: React.ReactElement
    /**
     * Initial interaction of component
     */
    interaction?: boolean | string
    /**
     * `onChange` trigger event
     */
    onChange?: (event: React.ChangeEvent, value: any) => void
    /**
     * `onChange` trigger event
     */
    onClick?: (event: React.MouseEvent, value: any) => void
    /**
     * `onFocus` trigger event
     */
    onFocus?: (event: React.FocusEvent, value: any) => void
    /**
     * `onBlur` trigger event
     */
    onBlur?: (event: React.FocusEvent, value: any) => void
    /**
     * Value of text input
     */
    value?: any
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared'
    /**
     * Size of component.
     */
    size?: 'large' | 'medium' | 'small' | 'jumbo'
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success'
    /**
     * Type of text input
     */
    type?: string
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    /**
     * Adding a suffix abbreviation to the end of the field
     */
    suffix?: string
    /**
     * Boolean prop to have custom icons show correct coloring
     */
    customIcon?: boolean
    hiddenLabel?: boolean
}

TextInput.bdsName = 'TextInput'

export { TextInput }

export type { TextInputProps, TextInputRef }

export default TextInput
