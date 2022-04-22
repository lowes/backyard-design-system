import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import Info from '@lowes-tech/bds-icons/InfoOutlined'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import TextInput from '../TextInput'
import type { TextInputProps, TextInputRef } from '../TextInput'
import { useBackyardTheme, getShape } from '../ThemeProvider'


import TextFieldBase from '../TextField/styles/TextFieldBase'

/**
 * @todo comment
 */
const TextFieldWrapper = styled(TextInput)`
    ${TextFieldBase}
`

const MaskedInput: BDSForwardRef<MaskedInputProps> = React.forwardRef<MaskedInputRef, MaskedInputProps>(
    function MaskedInput(
        {
            className,
            value: valueProp = '',
            defaultValue,
            icon,
            info,
            infoProps,
            type = 'text',
            shape: shapeProp, // = 'rounded',
            mask,
            onChange,
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

        // Controls the component and handles the value of the component
        const [ value, setValue ] = React.useState(defaultValue || valueProp)
        const [ originalValue, setOriginalValue ] = React.useState('') // eslint-disable-line @typescript-eslint/no-unused-vars

        // handle state of valueprop for text input
        React.useEffect(() => {
            if (valueProp !== value) {
                setValue(valueProp)
            }
        }, [valueProp])

        // Processed the mask for phone entries
        const handlePhoneMask = (value: string, mask: string) => {
            let i = 0
            let lastReplacedIndex = -1

            const filledMask = mask.replace(/_/g, (_, j) => {
                if (i >= value.length) {
                    return '_'
                }

                lastReplacedIndex = j
                return value[i++] // eslint-disable-line no-plusplus
            })

            return filledMask.substring(0, lastReplacedIndex +1)
        }
        
        // Processes the mask for currency. Builds number from back injecting needed leading zero's until there is a bit enough number
        const handleCurrencyMask = (value: string) => {
            const numValue = parseInt(value, 10)
            let maskedValue

            if (numValue.toString().length === 1) { maskedValue = `$ 0.0${numValue}` }
            if (numValue.toString().length === 2) { maskedValue = `$ 0.${numValue}` }
            if (numValue.toString().length >= 3) {
                const strValue = numValue.toString()
                const cents = strValue.slice(-2)
                const dollars = strValue.slice(0,-2).split(/(?=(?:\d{3})+$)/). join(",")
                maskedValue = `$ ${dollars}.${cents}`
            }

            return maskedValue
        }

        const handleMasks = (value: any) => {
            switch(mask) {
                case 'phone':
                    return handlePhoneMask(value.replace(/[^\d]/g, ''), '(___) ___-____')
    
                case 'currency':
                    return handleCurrencyMask(value.replace(/[^\d]/g, ''))
    
                default:
                    return ''
            }
        }

        const handleChange = (event: React.ChangeEvent, value: any) => {

            const newValue = handleMasks(value)

            setValue(newValue)
            setOriginalValue(newValue.replace(/[^\d]/g, ''))

            if(typeof onChange === 'function') {
                onChange(event, {
                    maskedValue: newValue,
                    typedValue: newValue.replace(/[^\d]/g, '')
                })
            }
        }
        
        React.useEffect(() => {
            if (mask !== 'currency' && value !== '') {
                const newValue = handleMasks(value)

                setValue(newValue)
                setOriginalValue(newValue.replace(/[^\d]/g, ''))
            }
        }, [])

        /**
         * Layout:
         *
         *  <TextInput />
         */
        return (
            <TextFieldWrapper
                className={classNames('textfield', className)}
                type={type}
                value={value}
                defaultValue={defaultValue}
                shape={shape}
                iconBefore={icon}
                iconAfter={info ? <Info {...infoProps} title={info} /> : null}
                onChange={handleChange}
                {...props}
                ref={ref}
            />
        )
    },
)

type MaskedInputRef = TextInputRef

interface MaskedInputProps extends TextInputProps {
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
    /**
     * The Mask that should be followed
     */
    mask?: 'currency' | 'phone'
}

MaskedInput.bdsName = 'MaskedInput'

export { MaskedInput }

export type { MaskedInputProps, MaskedInputRef }

export default MaskedInput