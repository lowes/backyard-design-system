import * as React from 'react'
import classNames from 'classnames'

import type { PathIconProps } from '@lowes-tech/bds-icons/components/PathIcon'

import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'

import Typography from '../Typography'
import type { TypographyProps } from '../Typography'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'
import { useFormControl } from '../FormControl'

import FormHelperTextWrapper from './styles/FormHelperTextWrapper'

/**
 * Backyard React Helper Text
 *
 *  <FormControl>
 *      <TextField />
 *      <FormHelperText>Example Helper Text</FormHelperText>
 *  </FormControl>
 *
 * Text to display as helper with other components.
 * Used with <FormControl> to correctly indent from input `indentHelper`
 */
const FormHelperText: BDSForwardRef<FormHelperTextProps> = React.forwardRef<
    FormHelperTextRef,
    FormHelperTextProps
>(function FormHelperText(
    {
        children = 'Helper',
        indent: indentProp,
        icon,
        disabled: disabledProp,
        state: stateProp,
        className,
        typographyProps,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({ validate: true, name: 'FormHelperText' })

    validateBackyardTheme(theme, 'FormHelperText')

    let { disabled, state, indent } = useFormControl({ noContext: true })

    // Props override calculated values
    if (indentProp !== undefined) indent = indentProp
    if (disabledProp !== undefined) disabled = disabledProp
    if (stateProp !== undefined) state = stateProp

    // Default values
    if (indent === undefined) indent = 'size_16'

    return (
        <FormHelperTextWrapper
            className={classNames('helper-text', state, { disabled, indent }, className)}
            style={style}
            {...props}
            ref={ref}
        >
            <Typography
                variant="helper"
                {...typographyProps}
                style={{
                    ...(indent ? {
                        paddingLeft:
                            typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16,
                    } : {}),
                    ...typographyProps?.style,
                }}
            >
                {React.isValidElement(icon)
                    ? React.cloneElement(icon, { className: 'helper-text-icon', size: 'size_12' })
                    : null}
                {children}
            </Typography>
        </FormHelperTextWrapper>
    )
})

type FormHelperTextRef = HTMLSpanElement

interface FormHelperTextProps extends BackyardBaseProps<FormHelperTextRef> {
    /**
     * String to use with <Typography>
     */
    children: string
    /**
     * Override indent appearance
     */
    indent?: keyof BackyardToken['sizes'] | boolean
    /**
     * Icon to appear before text
     */
    icon?: React.ReactElement<PathIconProps>
    /**
     * Override disabled appearance
     */
    disabled?: boolean
    /**
     * Override state appearance
     */
    state?: 'default' | 'success' | 'error' | 'info' | 'warning'
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Typography Props to extend Typography child with
     */
    typographyProps?: React.PropsWithRef<TypographyProps>
}

FormHelperText.bdsName = 'FormHelperText'

export { FormHelperText }

export type { FormHelperTextProps, FormHelperTextRef }

export default FormHelperText
