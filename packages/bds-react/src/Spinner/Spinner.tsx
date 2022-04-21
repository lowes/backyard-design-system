import * as React from 'react'
import classNames from 'classnames'

import Loading from '@lowes-tech/bds-icons/Loading'

import Overlay from '../Overlay'
import { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import SpinnerWrapper from './styles/SpinnerWrapper'

/**
 * Backyard React Spinner
 *
 * To be used when retrieving data or performing slow computations.
 * They notify to the user that their request is being processed.
 *
 * <Spinner show={true}
 *          color={'commerce'}
 *          invisible/>
 *
 * Loading spinners may be scaled down by adding the `inline` attribute if the loading experience is contextual
 * to a certain item on the page.
 *
 *  <Spinner
 *      show
 *      small
 *      inline
 *  />
 */
const Spinner: BDSForwardRef<SpinnerProps> = React.forwardRef<SpinnerRef, SpinnerProps>(
    function Spinner(
        {
            className,
            show = false,
            small = false,
            invisible = false,
            inline = false,
            color = inline ? 'interactive' : 'white',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Spinner')

        /**
         * Builds out the spinner to either wrap the Loading icon with the Overlay if its not inline mode
         * or provides just the Loading icon if it is in inline mode
         */
        const spinner = inline ? (
            <Loading color={color} />
        ) : (
            <Overlay
                className={classNames('spinner-overlay', className)}
                open={show}
                invisible={invisible}
            >
                <div className={classNames("icon-wrapper", (small) ? 'size--small' : '')}>
                    <Loading color={color} />
                </div>
            </Overlay>
        )

        return (
            <SpinnerWrapper
                className={classNames({ 'inline-spinner': inline }, (small) ? 'size--small' : '')}
                show={show}
                small={small}
                ref={ref}
                {...props}
            >
                {spinner}
            </SpinnerWrapper>
        )
    },
)

type SpinnerRef = HTMLSpanElement

interface SpinnerProps extends BackyardBaseProps<SpinnerRef> {
    /**
     * Whether or not to display the spinner on the page
     */
    show?: boolean
    /**
     * Whether or not to make the spinner small, when `true` makes spinner small
     */
    small?: boolean
    /**
     * Whether or not overlay is invisible
     */
    invisible?: boolean
    /**
     * Displays spinner without overlay to be used inline with text or inside components eg Buttons
     */
    inline?: boolean
    /**
     * Change color of spinner using a valid color @lowes-tech/bds-token
     */
    color?: string
    /**
     * Provides classname to Overlay component
     */
    className?: string
}

Spinner.bdsName = 'Spinner'

export { Spinner }

export type { SpinnerProps, SpinnerRef }

export default Spinner
