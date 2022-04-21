import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import Quickview from '@lowes-tech/bds-icons/QuickviewOutlined'
import QuickviewOff from '@lowes-tech/bds-icons/QuickviewOffOutlined'

import TextInput from '../TextInput'
import type { TextInputProps, TextInputRef } from '../TextInput'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import PasswordBase from './styles/PasswordBase'

/**
 * Extend `TextInput` with Password styles
 */
const StyledTextInput = styled(TextInput)`
    ${PasswordBase}
`

/**
 * Backyard React Password
 *
 * Password text input that extends on TextInput's API
 *
 *  <Password />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Password label="Password" />
 *      <FormHelperText>Enter a password</FormHelperText>
 *  </FormControl>
 */
const Password: BDSForwardRef<PasswordProps> = React.forwardRef<PasswordRef, PasswordProps>(
    function Password(
        {
            className,
            disabled,
            icon,
            defaultToggle = true,
            shape: shapeProp, // = 'rounded',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'Password',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Handle view toggle state
        const [toggle, setToggle] = React.useState(defaultToggle)

        /**
         * Handles toggle button click...
         */
        const handleToggle = () => {
            // If not disabled,
            if (!disabled) {
                // Toggle
                // eslint-disable-next-line no-shadow
                setToggle((toggle) => !toggle)
            }
        }

        /**
         * Layout:
         *
         *  <TextInput />
         */
        return (
            <StyledTextInput
                className={classNames('input--password', className)}
                disabled={disabled}
                type={toggle ? 'password' : 'text'}
                shape={shape}
                itemBefore={icon}
                itemAfter={
                    toggle ? (
                        <Quickview onClick={handleToggle} />
                    ) : (
                        <QuickviewOff onClick={handleToggle} />
                    )
                }
                ref={ref}
                {...props}
            />
        )
    },
)

type PasswordRef = TextInputRef

interface PasswordProps extends TextInputProps {
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
     * Whether or not password is visible, toggled by default
     */
    defaultToggle?: boolean
    /**
     * Icon Before Text Input
     */
    icon?: React.ReactElement
    /**
     * Defines fill color
     * Only useful for `filled` variant
     */
    fill?: string
    /**
     * Display variant of text input
     */
    variant?: 'outlined' | 'filled'
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared'
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success'
}

Password.bdsName = 'Password'

export { Password }

export type { PasswordProps, PasswordRef }

export default Password
