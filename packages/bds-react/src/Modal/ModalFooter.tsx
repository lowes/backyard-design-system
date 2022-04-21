import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import useModal from './useModal'

/**
 * Backyard React Modal Footer
 *
 * Component to use as child of `Modal`
 *
 * Should contain the primary actions of the modal,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <ModalFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </ModalFooter>
 */
const ModalFooter: BDSForwardRef<ModalFooterProps> = React.forwardRef<
    ModalFooterRef,
    ModalFooterProps
>(function ModalFooter(
    { children, className, noLine: noLineProp, orientation = 'horizontal', ...props },
    ref,
) {
    // Get modal context
    const { noLines: noLinesContext, ...override } = useModal() || {}

    // Memoize calculated props
    const { noLine } = React.useMemo(
        () => ({
            // Priority: 1. Prop -> 2. Context -> 3. Default Value (false)
            noLine: noLineProp || noLinesContext || false,
        }),
        [noLineProp, noLinesContext],
    )

    /**
     * Layout:
     *  <div modal-footer>
     *      ...
     *  </div>
     */
    return (
        <div
            className={classNames(
                'modal-footer',
                `orientation--${orientation}`,
                { 'no-line': noLine },
                className,
            )}
            {...props}
            {...override}
            ref={ref}
        >
            {children}
        </div>
    )
})

type ModalFooterRef = HTMLDivElement

interface ModalFooterProps extends BackyardBaseProps<HTMLDivElement> {
    /**
     * Whether or not the horizontal line is included
     *
     * @default false
     */
    noLine?: boolean
    /**
     * Button grouping orientation
     *
     * @default 'horizontal'
     */
    orientation?: 'none' | 'horizontal' | 'vertical'
}

ModalFooter.bdsName = 'ModalFooter'

export { ModalFooter }

export type { ModalFooterProps, ModalFooterRef }

export default ModalFooter
