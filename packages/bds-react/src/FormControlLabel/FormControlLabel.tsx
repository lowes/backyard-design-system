import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'
import Typography from '../Typography'
import useFormControl from '../FormControl/hooks/useFormControl'

import FormControlLabelWrapper from './styles/FormControlLabelWrapper'

/**
 * Backyard React Form Control Label
 *
 *  <FormControlLabel
 *      control={<Radio />}
 *      label="Controlled Radio Label"
 *  />
 *
 * Provides Label to inputs such as
 *  <Checkbox />
 *  <Radio />
 *  <Switch />
 * that allows control over the input for interactions
 * like hovering, clicking, and focusing.
 *
 * Can be used in conjunction with <FormControl> to provide
 * helper text in addition to a controlled label:
 *
 * ```
 *  <FormControl>
 *      <FormControlLabel
 *          control={<Checkbox />}
 *          label="Controlled Label"
 *      />
 *      <FormHelperText>Helper Text for Checkbox</FormHelperText>
 *  </FormControl>
 * ```
 */
const FormControlLabel: BDSForwardRef<FormControlLabelProps> = React.forwardRef<
    FormControlLabelRef,
    FormControlLabelProps
>(function FormControlLabel(
    {
        name = 'FormControlLabel', // eslint-disable-line @typescript-eslint/no-unused-vars
        label = 'Label',
        className,
        disabled: disabledProp,
        control,
        ...props
    },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'FormControlLabel')

    // Get props from controlled input
    const controlProps = control.props || {}

    // Uses FormControl
    const { disabled: controlDisabled } = useFormControl({
        disabled: disabledProp,
        indent: 'size_36',
    })

    // Allow FormControl to override props
    const disabled = controlDisabled || disabledProp

    /**
     * Layout:
     *
     *  <FormControlLabelWrapper>
     *      <Input>
     *      <Typography>
     *  </FormControlLabelWrapper>
     */
    return (
        <FormControlLabelWrapper
            className={classNames(className, { disabled: disabled || controlProps.disabled })}
            disabled={disabled || controlProps.disabled}
            {...props}
        >
            {React.cloneElement(control, { disabled: disabled || controlProps.disabled, ref })}
            <Typography variant="label">{label}</Typography>
        </FormControlLabelWrapper>
    )
})

type FormControlLabelRef = HTMLLabelElement

interface FormControlLabelProps extends BackyardBaseProps<HTMLLabelElement> {
    /**
     * Text for <FormControlLabel> to use
     */
    label?: string
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not <FormControlLabel> is disabled
     *
     * This will also disabled any input in the `control` prop
     * There is no need to disable both
     */
    disabled?: boolean
    /**
     * Required
     * Input Node for <FormControlLabel> to control and add label to
     */
    control: React.ReactElement
}

FormControlLabel.bdsName = 'FormControlLabel'

export { FormControlLabel }

export type { FormControlLabelProps, FormControlLabelRef }

export default FormControlLabel
