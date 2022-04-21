import * as React from 'react'
import classNames from 'classnames'

import Typography from '../Typography'
import type { TypographyRef, TypographyProps } from '../Typography'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

/**
 * Backyard React Form Heading
 *
 * `FormHeading` is intended to be used in conjunction with `FormControl`
 *
 * Use it on top of multiple form inputs inside `FormGroup` to give the
 * user visual context of the group of inputs. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading Above FormGroup</FormHeading>
 *      <FormGroup>
 *          <Checkbox id="1" />
 *          <Checkbox id="2" />
 *          <Checkbox id="3" />
 *      </FormGroup>
 *      <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 *  </FormControl>
 * ```
 */
const FormHeading: BDSForwardRef<FormHeadingProps> = React.forwardRef<
    FormHeadingRef,
    FormHeadingProps
>(function FormHeading({ children, className, variant = 'h5', ...other }, ref) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'FormHeading')

    /**
     * Layout:
     *
     *  <Typography>
     *      ...
     *  </Typography>
     */
    return (
        <Typography
            className={classNames('form-heading', className)}
            variant={variant}
            ref={ref as any}
            {...other}
        >
            {children}
        </Typography>
    )
})

type FormHeadingRef = TypographyRef

interface FormHeadingProps extends TypographyProps {
    /**
     * Text to use as heading
     */
    children: React.ReactNode
    /**
     * DOM class name
     */
    className?: string
    /**
     * Typography variant of heading
     * Normally should use default value of 'h5'
     */
    variant?: TypographyProps['variant']
}

FormHeading.bdsName = 'FormHeading'

export { FormHeading }

export type { FormHeadingProps, FormHeadingRef }

export default FormHeading
