import * as React from 'react'
import classNames from 'classnames'

import { useBackyardTheme } from '../ThemeProvider'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import ModalHandler, { ModalHandlerRef, ModalHandlerProps } from './ModalHandler'
import ModalControllerProvider from './ModalControllerProvider'

/**
 * Backyard React Modal Controller
 *
 * Extends from `ModalHandler` to offer and cleaner API to work with
 *
 * Controls modal defined in `modal` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `ModalHandler`
 *
 * Example:
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
const ModalController: BDSForwardRef<ModalControllerProps> = React.forwardRef<
    ModalControllerRef,
    ModalControllerProps
>(function ModalController(
    {
        className,
        modal: modalProp,
        open: openProp = false,
        onClose,
        onOpen,
        style: styleProp,
        modalStyle: modalStyleProp,
        position = {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        context,
        override,
        ...props
    },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme({ validate: true, name: 'ModalController' })

    // Track whether or not modal is open
    const [open, setOpen] = React.useState(openProp)

    /**
     * Close the modal
     */
    const closeModal = () => {
        setOpen(false)

        if (onClose) {
            onClose()
        }
    }

    /**
     * Open the modal
     */
    const openModal = () => {
        setOpen(true)

        if (onOpen) {
            onOpen()
        }
    }

    // Side effect for handling whether to open or close modal when `openProp` changes from external sources
    React.useEffect(() => (openProp ? openModal() : closeModal()), [openProp])

    // Memoize style prop
    const style = React.useMemo<React.CSSProperties>(
        () => ({
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.modal,
            ...styleProp,
        }),
        [theme.name, styleProp],
    )

    // Memoize modal style
    const modalStyle = React.useMemo(
        () => ({
            ...position,
            zIndex: theme.zIndex.modal + 1,
            ...modalProp?.props?.style,
            ...modalStyleProp,
        }),
        [theme.zIndex, modalStyleProp, position],
    )

    // Memoize modal render
    const modal = React.useMemo(
        () =>
            React.cloneElement(modalProp, {
                style: modalStyle,
                onCloseClick: () => closeModal(),
            }),
        [modalStyle],
    )

    /**
     * Layout:
     *  <ModalHandler>
     *      ...
     *  </ModalHandler>
     */
    return (
        <ModalControllerProvider open={open} context={context} override={override}>
            <ModalHandler
                className={classNames(
                    'modal-controller',
                    {
                        opened: open,
                        closed: !open,
                    },
                    className,
                )}
                open={open}
                onEscapeKeyDown={() => closeModal()}
                onOverlayClick={() => closeModal()}
                style={style}
                {...props}
                ref={ref}
            >
                {modal}
            </ModalHandler>
        </ModalControllerProvider>
    )
})

type ModalControllerRef = ModalHandlerRef

type ModalControllerOverrideProps = 'open'

interface ModalControllerProps extends Omit<ModalHandlerProps, ModalControllerOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Modal component to control
     */
    modal: React.ReactElement
    /**
     * Whether or not modal is open
     */
    open?: boolean
    /**
     * Style of modal controller
     */
    style?: React.CSSProperties
    /**
     * Style of the modal
     */
    modalStyle?: React.CSSProperties
    /**
     * Position of modal on page
     *
     * @default 'center of page'
     */
    position?: React.CSSProperties
    /**
     * Props to provide context for
     */
    context?: Record<string, any>
    /**
     * Props to override children with
     */
    override?: Record<string, any>
}

ModalController.bdsName = 'ModalController'

export { ModalController, ModalControllerProps, ModalControllerRef }

export default ModalController
