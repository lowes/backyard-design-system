import * as React from 'react'
import classNames from 'classnames'

import Typography from '../Typography'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import useModal from './useModal'

/**
 * Backyard React Modal Header
 *
 * Component to use as a child of `Modal`
 *
 * Should contain the text for the title of the modal
 *
 * Example:
 *  <ModalHeader
 *      label="Label"
 *      icon={<Settings />}
 *  >
 *      Modal Header
 *  </ModalHeader>
 */
const ModalHeader: BDSForwardRef<ModalHeaderProps> = React.forwardRef<
    ModalHeaderRef,
    ModalHeaderProps
>(function ModalHeader(
    { children, className, icon: iconProp, label: labelProp, noLine: noLineProp, ...props },
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

    // Icon component if defined
    const icon = iconProp
        ? React.cloneElement(iconProp, {
              className: classNames(
                  'modal-header-icon',
                  iconProp.props ? iconProp.props.className : '',
              ),
          })
        : null

    // Label component if defined
    const label = labelProp ? (
        <Typography className="modal-header-label" variant="body_1">
            {labelProp}
        </Typography>
    ) : null

    // Title component
    const title = (
        <Typography className="modal-header-text" variant="h4">
            {children}
        </Typography>
    )

    /**
     * Layout:
     *  <div modal-header>
     *      <span label />
     *      <div modal-header-title>
     *          <icon />
     *          <span title />
     *      </div>
     *  </div>
     */
    return (
        <div
            className={classNames('modal-header', { 'no-line': noLine }, className)}
            {...props}
            {...override}
            ref={ref}
        >
            {label}
            <div className="modal-header-title">
                {icon}
                {title}
            </div>
        </div>
    )
})

type ModalHeaderRef = HTMLDivElement

interface ModalHeaderProps extends BackyardBaseProps<ModalHeaderRef> {
    /**
     * Title of modal
     */
    children?: React.ReactNode
    /**
     * Icon to display before title
     */
    icon?: React.ReactElement
    /**
     * Label of title
     */
    label?: string
    /**
     * Whether or not the component has a horizontal line
     *
     * @default false
     */
    noLine?: boolean
}

ModalHeader.bdsName = 'ModalHeader'

export { ModalHeader }

export type { ModalHeaderProps, ModalHeaderRef }

export default ModalHeader
