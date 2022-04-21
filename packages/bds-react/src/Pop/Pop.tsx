import * as React from 'react'
import classNames from 'classnames'

import ClickAwayListener from '../ClickAwayListener'
import { Popover, PopoverProps, usePopover } from '../Popover'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import PopWrapper from './styles/PopWrapper'

const Pop: BDSForwardRef<PopProps & { ref?: any }> = React.forwardRef<
    PopRef,
    PopProps
>(function Pop(
    {
        className,
        openKeys = ['ArrowUp', 'ArrowDown'],
        closeKeys = ['Escape'],
        open: openProp = false,
        pop,
        delayClose = 300,
        delayOpen = 10,
        onChange,
        onOpen,
        onClose,
        onFocus,
        isSearch,
        anchor,
        shape: shapeProp, // = 'rounded',
        popoverProps = {},
        popperProps = {},
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Autocomplete',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const anchorRef = React.useRef(null)

    /**
     * Setup all state hooks needed
     */
    const [referenceElement, setReferenceElement] = React.useState(null)
    // Hold the container ref
    const containerRef = React.useRef(null)

    // Use Popover hook for open/close state handling
    const { open, handleOpen, handleClose } = usePopover({
        containerRef,
        referenceElement,
        delayClose,
        delayOpen,
        closeKeys,
        openKeys,
        open: openProp,
        onOpen,
        onClose,
        ref: anchorRef,
    })

    React.useEffect(() => setReferenceElement(anchorRef.current), [anchorRef])

    const funcs = {
        onClick: handleOpen,
        onFocus: handleOpen,
    }

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <PopWrapper
                className={classNames('autocomplete-wrapper', `shape--${shape}`, className)}
                ref={containerRef}
            >
                {React.cloneElement(anchor, {
                    className: classNames(
                        open ? 'focus' : '',
                        anchor.props.className,
                    ),
                    ...funcs,
                    shape,
                    ...props,
                    ref: anchorRef,
                })}
                {referenceElement ? (
                    <Popover
                        disablePortal
                        keepMounted
                        open={open}
                        anchorEl={referenceElement}
                        offset={[0, 16]}
                        pop={(
                            <div className="popover-wrapper">
                                {React.cloneElement(pop)}
                            </div>
                        )}
                        {...popoverProps}
                        {...popperProps}
                        ref={ref}
                    />
                ) : null}
            </PopWrapper>
        </ClickAwayListener>
    )
})

type PopRef = HTMLElement

type PopOverrideProps = 'onChange' | 'onFocus' | 'onKeyDown'

interface PopProps extends BackyardBaseProps<PopRef, PopOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][]
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][]
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
     */
    delayClose?: number
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number
    /**
     * Shape of the input and the popover.
     */
    shape?: 'rounded' | 'squared'
    onChange?: (event: React.ChangeEvent, value: string) => void
    onOpen?: () => void
    onClose?: () => void
    onFocus?: (event: React.FocusEvent, value: string) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
    pop?: React.ReactElement
    anchor: React.ReactElement
    open?: boolean
    value?: string
    isSearch?: boolean
    popoverProps?: Partial<PopoverProps>
    popperProps?: Partial<PopoverProps>
}

Pop.bdsName = 'Pop'

export { Pop }

export type { PopRef, PopProps }

export default Pop
