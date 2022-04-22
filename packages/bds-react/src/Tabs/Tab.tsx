/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import { TabWrapper } from './style/TabWrapper'

import TabContext from './TabContext'
import { Typography } from '../Typography'

/**
 * Backyard React Tab Component
 *
 *
 */
const Tab: BDSForwardRef<TabProps> = React.forwardRef<TabRef, TabProps>(function Tab(
    {
        ariaControls,
        className,
        disabled = false,
        id,
        index,
        label = 'Label',
        onClick,
        onKeyDown,
        role = 'tab',
        ...props
    },
    ref,
) {
    // pull handleClick, handleKeyDown, and isOnLayer
    const { selected, handleClick, handleKeyDown, isOnLayer } = React.useContext(TabContext)

    /**
     * Coerces a boolean value to a string.
     *
     * @param value - the boolean value to coerce
     */
    const booleanCoersion = (value) => {
        if (value) return 'true'

        return 'false'
    }

    /**
     * Layout:
     *
     * <li>
     *   <a>
     *     <Typography />
     *   </a>
     * </li>
     */
    return (
        <TabWrapper
            className={classNames(
                `tab`,
                {
                    disabled,
                    selected: selected === index,
                },
                className,
            )}
            isOnLayer={isOnLayer}
            id={id}
            disabled={disabled}
            onClick={(event) => {
                if (!disabled) {
                    handleClick(index, event)

                    if (onClick) {
                        onClick(event)
                    }
                }
            }}
            onKeyDown={(event) => {
                if (!disabled) {
                    if (onKeyDown) {
                        onKeyDown(event)
                    }

                    if (handleKeyDown) {
                        handleKeyDown(index, event)
                    }
                }
            }}
            aria-controls={ariaControls}
            role={role}
            aria-selected={booleanCoersion(selected === index)}
            {...props}
            ref={ref}
        >
            <Typography variant="body_2" bold={selected === index}>
                {label}
            </Typography>
        </TabWrapper>
    )
})

type TabRef = HTMLButtonElement

interface TabProps extends BackyardBaseProps<TabRef> {
    /**
     * The id of the TabContent associated with the tab.
     */
    ariaControls?: string
    /**
     * Adds a class to the tab
     */
    className?: string
    /**
     * Wether or not the tab is disabled
     */
    disabled?: boolean
    /**
     * Adds an id to the tab
     */
    id?: string
    /**
     * The index of the tab
     */
    index?: number
    /**
     * The text within a tab.
     */
    label?: string
    /**
     * Trigger function for onClick.
     */
    onClick?: (event: React.MouseEvent) => void
    /**
     * Trigger function for onKeyDown.
     */
    onKeyDown?: (event: React.KeyboardEvent) => void
    /**
     * The role for the tab.
     */
    role?: 'tab' | 'presentation'
    /**
     * Wether or not the tab is selected
     */
    selected?: boolean
}

Tab.bdsName = 'Tab'

export type { TabRef, TabProps }

export { Tab }

export default Tab
