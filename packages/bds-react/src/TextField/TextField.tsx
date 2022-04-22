import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import Info from '@lowes-tech/bds-icons/InfoOutlined'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import TextInput from '../TextInput'
import type { TextInputProps, TextInputRef } from '../TextInput'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import TextFieldBase from './styles/TextFieldBase'

/**
 * @todo comment
 */
const TextFieldWrapper = styled(TextInput)`
    ${TextFieldBase}
`

/**
 * Backyard React Text Field
 *
 * Standard text input that extends `TextInput` for functionality
 *
 *  <TextField label="Label" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <TextField label="Username" />
 *      <FormHelperText>Enter a username</FormHelperText>
 *  </FormControl>
 */

const TextField: BDSForwardRef<TextFieldProps> = React.forwardRef<TextFieldRef, TextFieldProps>(
    function TextField(
        {
            className,
            icon,
            info,
            infoProps,
            type = 'text',
            shape: shapeProp, // = 'rounded',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'TextField',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        /**
         * Layout:
         *
         *  <TextInput />
         */
        return (
            <TextFieldWrapper
                className={classNames('textfield', className)}
                type={type}
                shape={shape}
                itemBefore={icon}
                itemAfter={info ? <Info {...infoProps} title={info} /> : null}
                {...props}
                ref={ref}
            />
        )
    },
)

type TextFieldRef = TextInputRef

interface TextFieldProps extends TextInputProps {
    /**
     * Icon displayed before text
     */
    icon?: React.ReactElement
    /**
     * Info after text input
     */
    info?: string
    /**
     * Prop types to override info with
     */
    infoProps?: object
}

TextField.bdsName = 'TextField'

export { TextField }

export type { TextFieldProps, TextFieldRef }

export default TextField
