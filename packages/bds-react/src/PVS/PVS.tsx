import * as React from 'react'
import classNames from 'classnames'
import isURL from 'validator/lib/isURL'

import { CheckCircleFilled } from '@lowes-tech/bds-icons/CheckCircleFilled'

import Radio from '../Radio'
import type { RadioProps, RadioRef } from '../Radio'
import Tooltip from '../Tooltip'
import type { TooltipProps } from '../Tooltip'
import TooltipPopper from '../TooltipPopper'
import type { TooltipPopperProps } from '../TooltipPopper'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import PVSWrapper from './styles/PVSWrapper'

const badgeColorMap = {
    interactive: 'action_interactive',
    green: 'action_green',
}

/**
 * Backyard PVS component
 * Also known as a swatch selector.
 *
 * The PVS component allows the user to choose between various textures or colors offered for a particular item.
 * It provides a quick view of what options are available, and typically changes the relevant images to reflect
 * the changes made from the PVS selector.
 *
 * Only one option in a PVS may be selected at a time. Essentially, the swatches function as a radio button but
 * with images/color swatches included for a quick preview.
 *
 * The name of the swatch is visible on hover through a tooltip.
 *
 * ex.
 * <RadioGroup
 *      direction="row"
 *      defaultValue="crema-oak">
 *     <PVS
 *          value="natural-oak"
 *          title="Natural Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="cambridge-abbey-oak"
 *          title="Cambridge Abbey Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="crema-oak"
 *          title="Crema Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="black"
 *          fill="#000"
 *          unavailable
 *          title="Black"
 *          color="green"
 *     />
 *     <PVS
 *          value="white"
 *          fill="#ffffff"
 *          title="White"
 *          color="green" />
 * </RadioGroup>
 */
const PVS: BDSForwardRef<PVSProps> = React.forwardRef<PVSRef, PVSProps>(function PVS(
    {
        className,
        fill,
        unavailable,
        checked,
        defaultChecked,
        color = 'interactive',
        title,
        name,
        value,
        onChange,
        tooltipProps = {},
        popoverProps = {},
        popperProps = {},
        wrapperProps = {},
        inputClassName,
        id,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'PVS')

    // Checks if `fill` prop is a URL
    const isFillURL = isURL(fill, {
        // protocols - valid protocols can be modified with this option
        protocols: ['http', 'https'],
        require_tld: true,
        // require_protocol - if set as true isURL will return false if protocol is not present in the URL
        require_protocol: false,
        // require_host - if set as false isURL will not check if host is present in the URL
        require_host: true,
        // require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        // allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
        allow_protocol_relative_urls: false,
    })

    const pvsTemplate = (
        <PVSWrapper className={classNames('pvs-wrapper', className)} {...wrapperProps}>
            <Radio
                id={`pvs--${value}`}
                className={inputClassName}
                checked={checked}
                defaultChecked={defaultChecked}
                name={`pvs--${value}`}
                value={value}
                wrapperProps={{
                    className: classNames('pvs-input', { unavailable }),
                }}
                onChange={onChange}
                {...props}
                ref={ref}
            >
                <div
                    className="swatch"
                    style={{ backgroundColor: isFillURL ? 'transparent' : fill }}
                >
                    {isFillURL ? <img src={fill} alt={title} height="50" width="50" /> : null}
                    <CheckCircleFilled
                        className="selected-badge"
                        size="size_16"
                        color={unavailable ? 'disabled' : badgeColorMap[color]}
                    />
                </div>
            </Radio>
        </PVSWrapper>
    )

    return (
        <>
            {title ? (
                <TooltipPopper
                    tooltip={<Tooltip {...tooltipProps}>{title}</Tooltip>}
                    {...popoverProps}
                    {...popperProps}
                >
                    {pvsTemplate}
                </TooltipPopper>
            ) : (
                pvsTemplate
            )}
        </>
    )
})

type PVSRef = RadioRef

type PVSOverrideProps = 'wrapperProps'

interface PVSProps extends Omit<RadioProps, PVSOverrideProps> {
    /**
     * Required. The color or image to be displayed in the PVS
     * Can either be an image source or a color hex value (#000 or #000000).
     */
    fill: string
    /**
     * Required. Value of the internal `input`
     */
    value: string
    /**
     * DOM Name of the internal `input`
     * Note: Required when NOT a child of `RadioGroup`
     */
    name?: string
    /**
     * Name of the PVS swatch color/image.
     * Used as the tooltip content, also used as the `alt` value for image fills.
     */
    title?: string
    /**
     * DOM Class Name for PVS
     */
    className?: string
    /**
     * Used to indicate that a PVS is not currently available to the user
     */
    unavailable?: boolean
    /**
     * Whether or not `RadioTile` is checked
     */
    checked?: RadioProps['checked']
    /**
     * Whether or not the radio is checked by default
     */
    defaultChecked?: RadioProps['defaultChecked']
    /**
     * Color of the selected badge
     */
    color?: 'interactive' | 'green'
    /**
     * `onChange` function triggered when value of `input` changes
     * Chained through `RadioGroup` parent if present
     */
    onChange?: RadioProps['onChange']
    /**
     * Used to apply props on the radio wrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    /**
     * Overwrite props for the tooltips
     */
    tooltipProps?: React.PropsWithRef<TooltipProps>
    /**
     * Overwrite props for the tooltipPoppers
     */
    popoverProps?: Partial<React.PropsWithRef<TooltipPopperProps>>
    /**
     * Overwrite props for the tooltipPoppers
     *
     * Alais of `popoverProps`
     */
    popperProps?: Partial<React.PropsWithRef<TooltipPopperProps>>
    /**
     * DOM Class Name for the input
     */
    inputClassName?: string
}

PVS.bdsName = 'PVS'

export { PVS }

export type { PVSProps, PVSRef }

export default PVS
