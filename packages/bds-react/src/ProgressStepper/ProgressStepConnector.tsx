import * as React from 'react'
import classNames from 'classnames'

import BackyardBaseProps from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import ProgressStepperContext from './ProgressStepperContext'
import ProgressStepContext from './ProgressStepContext'

/**
 * Backyard React Progress Step Connector
 *
 * @ignore
 *
 * `ProgressStepConnector` is an internal component that visually connects `ProgresStep`s in `ProgressStepper`
 *
 * It only requires contexts provided by the `ProgressStepper` and `ProgressStep`
 */
const ProgressStepConnector: BDSForwardRef<ProgressStepConnectorProps> = React.forwardRef<
    ProgressStepConnectorRef,
    ProgressStepConnectorProps
>(function ProgressStepConnector({ className, ...props }, ref) {
    const { direction } = React.useContext(ProgressStepperContext)
    const { disabled, state } = React.useContext(ProgressStepContext)

    return (
        <div
            className={classNames(
                'progress-step-connector',
                direction,
                {
                    state,
                    disabled,
                },
                className,
            )}
            ref={ref}
            {...props}
        >
            <span
                className={classNames('step-line', {
                    'line-row': direction === 'row',
                    'line-column': direction === 'column',
                })}
            />
        </div>
    )
})

type ProgressStepConnectorRef = HTMLDivElement

interface ProgressStepConnectorProps extends BackyardBaseProps<ProgressStepConnectorRef> {
    /**
     * DOM classname
     */
    className?: string
}

ProgressStepConnector.bdsName = 'ProgressStepConnector'

export { ProgressStepConnector }

export type { ProgressStepConnectorRef, ProgressStepConnectorProps }

export default ProgressStepConnector
