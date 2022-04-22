import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import PillWrapper from './styles/PillWrapper'

/**
 * Backyard React Pill
 *
 * Wraps a child and renders a colored number at the anchor position
 * Wrapped component should be a single element, such as an icon
 *
 * Can be used without children for further customizability
 *
 * If `value` prop is not defined, forces to 'dot' shape
 * If `value` prop is defined, defaults to `circle` shape
 * It is possible to set `shape` to 'dot' and still give a number
 *
 * If `invisible` flag is set, pill will still render, but not be visible
 *      Note: `children` will still be visible
 *
 *  <Pill
 *      color="red"
 *  >
 *      <Account />
 *  </Pill>
 *
 *  <Pill
 *      color="green"
 *      value={23}
 *  />
 */
const Pill: BDSForwardRef<PillProps> = React.forwardRef<PillRef, PillProps>(function Pill(
    {
        anchor = ['top', 'right'],
        children,
        className,
        color = 'brand',
        display = 'inline-flex',
        invisible: invisibleProp = false,
        max = 99,
        size = 'medium',
        shape: shapeProp = 'circle',
        value: valueProp,
        variant = 'filled',
        wrapperProps = {},
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Pill')

    // Cap value at max value
    const value = valueProp > max ? `${max}+` : valueProp
    // If no variant is indicator set, set shape to dot
    const shape = variant === 'indicator' ? 'dot' : shapeProp
    // If no value set and not indicator, set invisibility to true
    const invisible = !valueProp && variant !== 'indicator' ? true : invisibleProp

    /**
     * Layout:
     *  <span wrapper>
     *      {children}
     *      <span pill>
     *          {value}
     *      </span>
     *  </span>
     */
    return (
        <PillWrapper
            {...wrapperProps}
            className={classNames('pill--wrapper', wrapperProps.className)}
            display={display}
        >
            {children}
            <span
                className={classNames(
                    'pill',
                    `variant--${variant}`,
                    `color--${color}`,
                    `shape--${shape}`,
                    `anchor--${anchor[0]}-${anchor[1]}`,
                    `size--${size}`,
                    (valueProp > max) ? 'over-max' : '',
                    {
                        invisible,
                    },
                    className,
                )}
                {...props}
                ref={ref}
            >
                {variant !== 'indicator' ? value : null}
            </span>
        </PillWrapper>
    )
})

type PillRef = HTMLSpanElement

type PillOverrideProps = 'size'

interface PillProps extends BackyardBaseProps<PillRef, PillOverrideProps> {
    /**
     * The anchor of the pill [y-pos, x-pos]
     * top-left, top-right, bottom-left, bottom-right
     */
    anchor?: Array<'top' | 'bottom' | 'left' | 'right'>
    /**
     * The pill will be added relative to this node.
     */
    children?: React.ReactNode
    /**
     * DOM Class Name for pill
     */
    className?: string
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
     color?: 'dark-blue' | 'blue' | 'light-blue' | 'interactive' | 'green' | 'red' | 'gold' | 'lfp-yellow' | 'neutral'
    /**
     * Display type of wrapper
     * Useful if you need a blocking 'flex'
     */
    display?: string
    /**
     * Whether or not the pill is invisible
     * If invisible, still renders children; only the pill is invisible
     */
    invisible?: boolean
    /**
     * Maximum value of pill number
     */
    max?: number
    /**
     * Shape of pill
     * Useful if you still want to provide a `value`, but force a dot
     */
    shape?: 'circle' | 'dot'
    /**
     * Value of pill
     */
    value?: number
    /**
     * Variant of pill
     */
    variant?: 'filled' | 'outlined' | 'indicator'
    /**
     * Wrapper props of pill and children
     * Useful for if you want to set the `style` prop of the wrapper
     */
    wrapperProps?: BackyardBaseProps<PillRef> & { display?: string }
    /**
     * Change the size of the pill
     */
    size?: 'medium' | 'jumbo'
}

Pill.bdsName = 'Pill'

export { Pill }

export { PillProps, PillRef }

export default Pill
