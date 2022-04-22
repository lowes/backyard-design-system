import * as React from 'react'
import classNames from 'classnames'

import Checkmark from '@lowes-tech/bds-icons/Checkmark'
import Close from '@lowes-tech/bds-icons/Close'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import IconButton from '../IconButton'
import type { IconButtonRef, IconButtonProps } from '../IconButton'
import Typography from '../Typography'

import ProgressStepperContext from './ProgressStepperContext'
import ProgressStepContext from './ProgressStepContext'

import ProgressStepWrapper from './styles/ProgressStepWrapper'

/**
 * Backyard React Progress Step
 *
 * `ProgressStep` is used as a child of `ProgressStepper` to provide the current step of the stepper to the user.
 * Note: `ProgressStep` __must__ be a child of `ProgressStepper`
 *
 * The `ProgressStep` calculates whether or not it is selected through the supplied `step` prop of the parent `ProgressStepper`.
 *
 * When the `disabled` prop is true, the button and text becomes disabled from the user.
 *
 * The content of the button is determined by the following in respective order of importance:
 *  * `icon` prop - ex. <CreditCard />
 *  * `label` prop - ex. "A"
 *  * `index + 1` number of the step
 *
 * Example:
 * ```
 *  <ProgressStep
 *      icon={<CreditCard />}
 *      title="Credit Card"
 *      caption="Enter your credit card information"
 *  />
 * ```
 */
const ProgressStep: BDSForwardRef<ProgressStepProps> = React.forwardRef<
    ProgressStepRef,
    ProgressStepProps
>(function ProgressStep(
    {
        caption,
        children,
        className,
        completeIcon = <Checkmark />,
        disabled,
        errorIcon = <Close />,
        icon,
        index,
        label,
        last,
        onComplete,
        onError,
        onSelected,
        onSuccess,
        selected,
        size = 'small',
        successIcon = <Checkmark />,
        state: stateProp,
        title,
        wrapperProps = {},
        ...props
    },
    ref,
) {
    /**
     * Map of props for each state the step's button can be in
     */
    const buttonStateProps: { [index: string]: IconButtonProps } = {
        enabled: {
            variant: 'secondary',
            shape: 'circle',
            color: 'neutral',
            size: 'small',
            ariaTitle: title,
        },
        active: {
            variant: 'primary',
            shape: 'circle',
            color: 'interactive',
            size: 'small',
            ariaTitle: title,
        },
        complete: {
            variant: 'primary',
            shape: 'circle',
            color: 'interactive',
            size: 'small',
            ariaTitle: title,
        },
        success: {
            variant: 'primary',
            shape: 'circle',
            color: 'interactive',
            size: 'small',
            ariaTitle: title,
        },
        error: {
            variant: 'secondary',
            shape: 'circle',
            color: 'red',
            size: 'small',
            ariaTitle: title,
        },
        disabled: {
            variant: 'secondary',
            shape: 'circle',
            size: 'small',
            disabled: true,
            ariaTitle: title,
        },
    }

    // Get stepper context
    const { step, connector, direction, nonLinear } = React.useContext(ProgressStepperContext)

    // Default state is enabled
    let state: ProgressStepProps['state'] = 'enabled'

    // If state prop is given and not reset to null,
    if (stateProp !== undefined && stateProp !== null) {
        // Use state prop
        state = stateProp
    } else if (step === index) {
        // Else if current step from stepper is its index, it is active
        state = 'active'
    } else if (!nonLinear && step > index) {
        // Else if the stepper is non-linear and the step is passed the index,
        // step is complete
        state = 'complete'
    } else if (!nonLinear && step < index) {
        // Else if the stepper is non-linear and the step is before the index,
        // step is enabled and ready
        state = 'enabled'
    }

    // Memoize the context value of the progress step to update/pass to any children
    const contextValue = React.useMemo(() => ({ index, last, label: index + 1, disabled, state }), [
        index,
        last,
        disabled,
        stateProp,
    ])

    // Get button props from state
    const buttonProps = buttonStateProps[state]

    // The default label content can be overridden by an icon or a given label prop
    const labelContent = icon || label || contextValue.label

    // Map and get the content for the button depending on the state
    const buttonContent =
        {
            enabled: labelContent,
            active: labelContent,
            complete: completeIcon,
            success: successIcon,
            error: errorIcon,
            disabled: labelContent,
        }[state] || labelContent

    // Side effect to trigger the `onSelected` function when the step is selected
    React.useEffect(() => {
        if (!disabled) {
            if (selected && onSelected) {
                onSelected()
            }
        }
    }, [selected])
    // Side effect to trigger `onComplete`, `onError`, or `onSuccess` when the state updates
    React.useEffect(() => {
        if (!disabled) {
            switch (state) {
                case 'complete':
                    if (onComplete) {
                        onComplete()
                    }

                    break
                case 'error':
                    if (onError) {
                        onError()
                    }

                    break
                case 'success':
                    if (onSuccess) {
                        onSuccess()
                    }

                    break
                default:
                // Do nothing
            }
        }
    }, [state])

    /**
     * Layout:
     *  <div>
     *      <div connector? />
     *      <IconButton />
     *      <span label>
     *          <h5 title />
     *          <span caption />
     *      </span>
     *      ...
     *  </div>
     */
    return (
        <ProgressStepContext.Provider value={contextValue}>
            <>
                <ProgressStepWrapper
                    {...wrapperProps}
                    className={classNames(
                        'progress-step',
                        `size--${size}`,
                        `direction--${direction}`,
                        !disabled ? state : 'disabled',
                        wrapperProps?.className,
                    )}
                >
                    {connector && index !== 0 ? connector : null}
                    <IconButton
                        aria-label={title}
                        {...buttonProps}
                        disabled={disabled}
                        {...props}
                        className={classNames(
                            'progress-step-button',
                            selected && !disabled ? 'focus' : null,
                            className,
                        )}
                        ref={ref}
                    >
                        {buttonContent}
                    </IconButton>
                    <span className="progress-step-label" aria-disabled={disabled}>
                        {title ? <Typography variant="h5">{title}</Typography> : null}
                        {caption ? (
                            <Typography variant="caption" color="text_tertiary">
                                {caption}
                            </Typography>
                        ) : null}
                    </span>
                </ProgressStepWrapper>
                {children}
            </>
        </ProgressStepContext.Provider>
    )
})

type ProgressStepRef = IconButtonRef

interface ProgressStepProps extends IconButtonProps {
    /**
     * Caption of the progress step
     */
    caption?: string
    /**
     * `ProgressStepContent` can be passed to give context to
     * `ProgressStepContext` and `ProgressStepperContext`
     */
    children?: React.ReactNode
    /**
     * DOM Class names
     */
    className?: string
    /**
     * Default icon to use on step complete
     */
    completeIcon?: React.ReactElement
    /**
     * Mark the step as disabled,
     * will also disable the button
     */
    disabled?: boolean
    /**
     * Default error icon to use on step error
     */
    errorIcon?: React.ReactElement
    /**
     * Icon of the progress step button,
     * will override the `label` prop and any default icon
     * set by `completeIcon`, `errorIcon`, and `successIcon`
     */
    icon?: React.ReactElement
    /**
     * The position of the progress step within the progress stepper
     */
    index?: number
    /**
     * Label text of the button for the progress step
     */
    label?: string
    /**
     * Whether or not the progress step is rendered last
     */
    last?: boolean
    /**
     * Trigger function for when step is completed
     */
    onComplete?: () => void
    /**
     * Trigger function for when step encounters error
     */
    onError?: () => void
    /**
     * Trigger function for when the step is selected
     */
    onSelected?: () => void
    /**
     * Trigger function for when step resolves an error
     */
    onSuccess?: () => void
    /**
     * Whether or not the progress step is selected
     */
    selected?: boolean
    /**
     * Size of the progress step
     */
    size?: 'small' | 'large'
    /**
     * Default success icon to use on step success
     */
    successIcon?: React.ReactElement
    /**
     * State of the progress step
     */
    state?: 'enabled' | 'active' | 'complete' | 'success' | 'error' | 'disabled'
    /**
     * Title of the progress step
     */
    title?: string
    /**
     * Progress Step wrapper props
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
}

ProgressStep.bdsName = 'ProgressStep'

export { ProgressStep }

export type { ProgressStepRef, ProgressStepProps }

export default ProgressStep
