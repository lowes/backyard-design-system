import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import FormControlWrapper from './styles/FormControlWrapper'
import FormControlProvider from './FormControlProvider'

/**
 * Backyard React Form Control
 *
 * Allows control over form components.
 * Passes `state` through form components and helper text, to sync visually.
 * Uses component's 'bdsName' metadata to configure helper text.
 *
 * Combine with `FormHeading`, `FormGroup` and `FormHelperText` to construct form heirarchy
 *
 * ```
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 * ```
 * or
 * ```
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <Multiselect
 *          options={[
 *              { label: 'White', value: 'white' },
 *              { label: 'Gray', value: 'gray' },
 *              { label: 'Black', value: 'black' },
 *          ]}
 *      />
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 * ```
 */
const FormControl: BDSForwardRef<FormControlProps> = React.forwardRef<
    FormControlRef,
    FormControlProps
>(function FormControl({ children, className, component = 'div', disabled, state, ...props }, ref) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'FormControl')

    /**
     * Layout:
     *
     *  <FormControlWrapper>
     *      ...
     *  </FormControlWrapper>
     */
    return (
        <FormControlProvider disabled={disabled} state={state}>
            <FormControlWrapper
                className={classNames(className, state, 'form-control')}
                as={component}
                {...props}
                ref={ref}
            >
                {children}
            </FormControlWrapper>
        </FormControlProvider>
    )
})

type FormControlRef = HTMLDivElement

interface FormControlProps extends BackyardBaseProps<FormControlRef> {
    /**
     * React Children
     */
    children: React.ReactElement | React.ReactElement[]
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Component to render as
     */
    component?: React.ElementType
    /**
     * Controls the disabled state of children
     */
    disabled?: boolean
    /**
     * Controls state of children
     */
    state?: 'error' | 'success' | 'warning' | 'info'
}

FormControl.bdsName = 'FormControl'

export { FormControl }

export type { FormControlProps, FormControlRef }

export default FormControl
