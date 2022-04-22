import * as React from 'react'
import classNames from 'classnames'

import TriangleDown from '@lowes-tech/bds-icons/TriangleDown'
import TriangleUp from '@lowes-tech/bds-icons/TriangleUp'
import PlusFilled from '@lowes-tech/bds-icons/PlusFilled'
import MinusFilled from '@lowes-tech/bds-icons/MinusFilled'

import AccordionWrapper from './styles/AccordionWrapper'
import BackyardBaseProps from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'


/**
 * Backyard React Accordion
 *
 * Accordion uses chevronUp and chevronDown by default. To use the plus and minus
 * icons, you can change openIcon to 'plus' and closeIcon to 'minus'.
 *
 * The accordion size is medium by default.
 *
 * <Accordion
 *  title="Title"
 * >
 *     This is the contents of the accordion.
 * </Accordion>
 *
 */
const Accordion: BDSForwardRef<AccordionProps> = React.forwardRef<AccordionRef, AccordionProps>(
    function Accordion(
        {
            children,
            className,
            title,
            subtitle,
            open: openProp,
            defaultOpen = false,
            keepMounted = true,
            size = 'medium',
            variant = 'triangle',
            color = 'transparent',
            onClick,
            onOpen,
            onClose,
            ...props
        },
        ref,
    ) {
        // State of whether or not <Accordion> is open
        const [open, setOpen] = React.useState(openProp || defaultOpen)

        // Get relevant icons from icon maps
        const mappedOpenIcon = (variant === 'triangle' 
            ? <TriangleDown color='action_interactive' /> 
            : <PlusFilled color='action_interactive' />)
        
            const mappedCloseIcon = (variant === 'triangle' 
            ? <TriangleUp color='action_interactive' /> 
            : <MinusFilled color='action_interactive' />)

        /**
         * Handles the `onOpen` event of the accordion header
         * Triggers defined `onOpen` from props if available
         *
         * @param {Event} event - DOM event
         */
        function openAccordion() {
            setOpen(true)

            if (onOpen) {
                onOpen()
            }
        }

        /**
         * Handles the `onClose` event of the accordion header
         * Triggers defined `onClose` from props if available
         *
         * @param {Event} event - DOM event
         */
        function closeAccordion() {
            setOpen(false)

            if (onClose) {
                onClose()
            }
        }

        /**
         * Toggle opened/closed state
         */
        function handleClick(event: AccordionEvents) {
            if (open) {
                closeAccordion()
            } else {
                openAccordion()
            }

            if (onClick) {
                onClick(event, !open)
            }
        }

        // Side effect to control open state externally
        React.useEffect(() => (openProp ? openAccordion() : closeAccordion()), [openProp])

        /**
         * Layout:
         * <div wrapper>
         *  <span header>
         *    <Typography title>
         *
         *    <span>
         *      <svg icon>
         *    </span>
         *  </span>
         *
         *  <span>
         *    <children>
         *  </span>
         * </div>
         */
        return (
            <AccordionWrapper
                className={classNames(
                    'backyard',
                    'accordion',
                    `variant--${variant}`,
                    `color--${color}`,
                    `size--${size}`,
                    open ? 'opened' : 'closed',
                    className
                )}
                size={size}
                {...props}
                ref={ref}
            >
                <button
                    type='button'
                    className={classNames(
                        'accordion-header',
                        open ? 'opened' : 'closed'
                    )}
                    onClick={handleClick}
                    tabIndex={0}
                >
                    <div className='accordion-title-group'>
                        <span className='accordion-title'>
                            {title}
                        </span>
                        {
                            size === 'large' ?
                                (
                                    <span className='accordion-subtitle'>
                                        {subtitle}
                                    </span>
                                ) : null
                        }
                    </div>

                    <div className='accordion-icon'>
                        {open ? mappedCloseIcon : mappedOpenIcon}
                    </div>
                </button>
                {open || keepMounted ? (
                    <span
                        className={classNames('accordion-content', open ? 'opened' : 'closed')}
                        aria-hidden="true"
                    >
                        {children}
                    </span>
                ) : null}
            </AccordionWrapper>
        )
    },
)

type AccordionRef = HTMLDivElement

type AccordionOverrideProps = 'size' | 'onClick'

type AccordionEvents = React.MouseEvent | React.KeyboardEvent

interface AccordionProps extends BackyardBaseProps<AccordionRef, AccordionOverrideProps> {
    /**
     * Components that will be displayed when the Accordion is opened.
     */
    children?: React.ReactNode
    /**
     * Adds a class name to the Accordion.
     */
    className?: string
    /**
     * The Accordion title.
     */
    title?: string
    /**
     * The Accordion subtitle
     */
    subtitle?: string
    /**
     * The default state of the <Accordion /> when it is initially rendered.
     */
    defaultOpen?: boolean
    /**
     * The controlled state of the <Accordidon />.
     */
    open?: boolean
    /**
     * Keeps the children mounted.
     */
    keepMounted?: boolean
    /**
     * The size of the Accordion.
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * Variant of the Accordion icons
     */
    variant?: 'triangle' | 'plus'
    /**
     * The color of the accordion
     */
    color?: 'transparent' | 'interactive' | 'neutral'
    /**
     * Trigger function for onClick.
     */
    onClick?: (event: AccordionEvents, open: boolean) => void
    /**
     * Trigger function for onOpen.
     */
    onOpen?: () => null
    /**
     * Trigger function for onClose.
     */
    onClose?: () => null
}

Accordion.bdsName = 'Accordion'

export { Accordion }

export type { AccordionProps, AccordionRef }

export default Accordion
