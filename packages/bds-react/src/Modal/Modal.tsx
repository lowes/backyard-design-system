import * as React from 'react'
import classNames from 'classnames'

import Close from '@lowes-tech/bds-icons/Close'

import IconButton from '../IconButton'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import type { IconButtonProps } from '../IconButton'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { BackyardTheme } from '../ThemeProvider/ThemeProvider'

import ModalProvider from './ModalProvider'
import ModalWrapper from './styles/ModalWrapper'

/**
 * Backyard React Modal
 *
 * Barebones modal component for styling and handling if extended
 *
 * This component contains only the styling for the modal component, not the logic for handling displaying the modal
 *
 * The children of this component should be one of the three included modal components:
 *
 *  1) `ModalHeader` (Required) - for the header of the component,
 *      containing the label, title, and an icon if desired
 *
 *  2) `ModalBody` (Required) - for the body of the component,
 *      containing the body text and any additional components for the modal
 *
 *  3) `ModalFooter` (Optional) - for the footer of the component,
 *      if any controls are needed for the modal, such as a 'cancel' button, or an action button
 *
 * Example:
 *  <Modal>
 *      <ModalHeader
 *          label="Label"
 *          icon={<Settings />}
 *      >
 *          Modal Heading
 *      </ModalHeader>
 *      <ModalBody>
 *          Modal Body
 *      </ModalBody>
 *      <ModalFooter>
 *          <Button
 *              variant="secondary"
 *              color="contrast"
 *          >
 *              Cancel
 *          </Button>
 *          <Button>Action</Button>
 *      </ModalFooter>
 *  </Modal>
 *
 * For controlling this modal, or any other custom modal, use `ModalController`
 *
 *  <ModalController
 *      modal={(
 *          <Modal>
 *              <ModalHeader ... />
 *              <ModalBody ... />
 *              <ModalFooter ... />
 *          </Modal>
 *      )}
 *  />
 */
const Modal: BDSForwardRef<ModalProps> = React.forwardRef<ModalRef, ModalProps>(function Modal(
    {
        children,
        className,
        invisible,
        size = 'medium',
        shape: shapeProp, // = 'rounded',
        onCloseClick,
        closeProps = {},
        noLines = false,
        height,
        width,
        maxWidth,
        maxHeight,
        style: styleProp,
        context,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'Modal',
    })

    // Get shape context from theme
    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    /**
     * Handles event logic when close button is clicked
     *
     * @param {Event} event - DOM event
     */
    const handleCloseClick = (event: React.MouseEvent): void => {
        // Trigger `onCloseClick` if defined
        if (onCloseClick) {
            onCloseClick(event)
        }
    }

    // Memoize style prop
    const style = React.useMemo(
        () => ({
            '--style-modal-width': theme.sizes[width] || width || 'auto',
            '--style-modal-height': theme.sizes[height] || height || 'auto',
            '--style-modal-max-width': theme.sizes[maxWidth] || maxWidth || '100vw',
            '--style-modal-max-height': theme.sizes[maxHeight] || maxHeight || '100vh',
            ...styleProp,
        }),
        [theme.name, styleProp],
    )

    // Create modal close button
    const close = (
        <IconButton
            className="modal-close"
            variant="ghost"
            color="neutral"
            size="small"
            ariaTitle="modal-close"
            onClick={handleCloseClick}
            shape={shape}
            {...closeProps}
        >
            <Close />
        </IconButton>
    )

    /**
     * Layout:
     *  <div wrapper>
     *      <IconButton close />
     *      ...
     *  </div>
     */
    return (
        <ModalProvider noLines={noLines} context={context}>
            <ModalWrapper
                className={classNames(
                    'modal',
                    `size--${size}`,
                    `shape--${shape}`,
                    {
                        invisible,
                        'no-lines': noLines,
                    },
                    className,
                )}
                tabIndex="-1"
                style={style}
                {...props}
                ref={ref}
            >
                {close}
                {children}
            </ModalWrapper>
        </ModalProvider>
    )
})

type ModalRef = HTMLDivElement

type ModalOverrideProps = 'size' | 'height' | 'width'

interface ModalProps extends BackyardBaseProps<ModalRef, ModalOverrideProps> {
    /**
     * Children Components
     * Should only contain `ModalHeader`, `ModalBody`, and `ModalFooter` as children
     */
    children: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not modal is invisible to user
     * If the modal is invisible, all pointer events will be ignored
     */
    invisible?: boolean
    /**
     * Size of the modal
     * If the modal size is full-screen, the modal will expand to 100vw x 100vh
     * If the modal body content exceeds 100vh, then the body will overflow with a scrollbar
     */
    size?: 'small' | 'medium' | 'large' | 'jumbo' | 'auto' | 'full-screen'
    /**
     * Shape of the outer modal
     */
    shape?: 'rounded' | 'squared'
    /**
     * `onClick` handler for close button, when the close button is clicked
     * By default, does nothing, but `ModalController` will automatically add a close handle for this button
     */
    onCloseClick?: IconButtonProps['onClick']
    /**
     * Props to extend the close icon button with
     */
    closeProps?: React.PropsWithRef<IconButtonProps>
    /**
     * Whether or not `Modal` has lines between `ModalHeader` and `ModalFooter`
     *
     * @default false
     */
    noLines?: boolean
    /**
     * Height of the Modal
     *
     * Shorthand for `style={{ height }}`
     */
    height?: keyof BackyardTheme['sizes'] | string
    /**
     * Width of the Modal
     *
     * Note: Overrides `size` prop
     *
     * Shorthand for `style={{ width }}`
     */
    width?: keyof BackyardTheme['sizes'] | string
    /**
     * Maximum Height of the Modal
     *
     * Shorthand for `style={{ maxHeight }}`
     */
    maxHeight?: keyof BackyardTheme['sizes'] | string
    /**
     * Maximum Width of the Modal
     *
     * Shorthand for `style={{ maxWidth }}`
     */
    maxWidth?: keyof BackyardTheme['sizes'] | string
    /**
     * Context to provide children
     */
    context?: Record<string, any>
}

Modal.bdsName = 'Modal'

export { Modal }

export type { ModalProps, ModalRef }

export default Modal
