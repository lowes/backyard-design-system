import * as React from 'react'
import classNames from 'classnames'

import Typography, { TypographyRef, TypographyProps } from '../Typography'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React Modal Body
 *
 * Component to use as a child of `Modal`
 *
 * Contains the body text of the modal, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `ModalFooter` component
 *
 * Example:
 *  <ModalBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </ModalBody>
 */
const ModalBody: BDSForwardRef<ModalBodyProps> = React.forwardRef<ModalBodyRef, ModalBodyProps>(
    function ModalBody({ children, className, ...props }, ref) {
        /**
         * Layout:
         *  <p modal-body>
         *      ...
         *  </p>
         */
        return (
            <Typography
                className={classNames('modal-body', className)}
                variant="body_1"
                as="div"
                {...props}
                ref={ref}
            >
                {children}
            </Typography>
        )
    },
)

type ModalBodyRef = TypographyRef

interface ModalBodyProps extends TypographyProps {
    // Nothing... for now...
}

ModalBody.bdsName = 'ModalBody'

export { ModalBody, ModalBodyRef, ModalBodyProps }

export default ModalBody
