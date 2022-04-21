import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import ButtonGroupWrapper from './style/ButtonGroupWrapper'

/**
 * Backyard React ButtonGroup
 */
const ButtonGroup: BDSForwardRef<ButtonGroupProps> = React.forwardRef<
    ButtonGroupRef,
    ButtonGroupProps
>(function ButtonGroup(
    {
        className,
        children,
        color = 'interactive',
        size = 'medium',
        variant = 'secodnary',
        shape: shapeProp, // = 'rounded',
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'ButtonGroup',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    /**
     * Layout:
     *
     * <div wrapper>
     *  <children />
     * </div wrapper>
     */
    return (
        <ButtonGroupWrapper
            className={classNames('button-group', `color--${color}`, `shape--${shape}`, `variant--${variant}`, className)}
            color={color}
            {...props}
            ref={ref}
        >
            {React.Children.map(children as React.ReactElement, (child) =>
                React.cloneElement(child, {
                    color,
                    size,
                    variant: 'ghost',
                    shape: 'rounded',
                    type: 'button',
                    ...child.props,
                }),
            )}
        </ButtonGroupWrapper>
    )
})

type ButtonGroupRef = HTMLDivElement

type ButtonOverrideProps = 'size'

interface ButtonGroupProps extends BackyardBaseProps<ButtonGroupRef, ButtonOverrideProps> {
    /**
     * Adds a classname to the button group.
     */
    className?: string
    /**
     * The buttons passed to the button group
     */
    children?: React.ReactNode
    /**
     * Color of the grouped buttons
     */
    color?: 'interactive' | 'neutral'
    /**
     * Shape of the whole group of buttons.
     */
    shape?: 'rounded' | 'squared'

    size?: 'medium' | 'small'

    variant: 'secondary' | 'ghost'
}

ButtonGroup.bdsName = 'ButtonGroup'

export type { ButtonGroupRef, ButtonGroupProps }

export { ButtonGroup }

export default ButtonGroup
