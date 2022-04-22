import CheckCircleFilled from '@lowes-tech/bds-icons/CheckCircleFilled'
import classNames from 'classnames'
import * as React from 'react'

import Radio from '../../Radio'
import type { RadioRef, RadioProps } from '../../Radio'
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

import TileWrapper from '../styles/TileWrapper'

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile is to be used as a static element on the page that functions like a radio button.
 * The entire surface of the tile is selectable, which prevents additional links or call to actions from being
 * included within the content.
 *
 * note: The outlined variation is to be used when there are pictures being included on the tile(s).
 * If it is part of a radio group or set, all the tiles should be of the same variation.
 *
 * example:
 *  <RadioTile
 *      value='test1'
 *      name='test'
 *      checked
 *  >
 *     <span>Hello World</span>
 *  </RadioTile>
 *
 * example 2:
 *  <RadioGroup
 *      name={'test2'}
 *      direction={'row'}
 *      defaultValue={'2'}
 *      onChange={() => {}}
 *  >
 *      <RadioTile
 *          inputId={'1'}
 *          value={'1'}
 *          variant='filled'
 *      >
 *          <span>Item 1</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'2'}
 *          value={'2'}
 *          variant='filled'
 *      >
 *          <span>Item 2</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'3'}
 *          value={'3'}
 *          variant='filled'
 *          disabled
 *      >
 *          <span>Item 3</span>
 *      </RadioTile>
 *  </RadioGroup>
 */
const RadioTile: BDSForwardRef<RadioTileProps> = React.forwardRef<RadioTileRef, RadioTileProps>(
    function RadioTile(
        {
            children,
            className,
            id,
            color = 'surface',
            shape: shapeProp, // = 'rounded',
            disabled = false,
            name,
            value,
            checked,
            defaultChecked,
            wrapperProps = {},
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'RadioTile',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        /**
         * Layout:
         *  <label>
         *      ...
         *      <Radio />
         *      <icon />
         *  </label>
         */
        return (
            <TileWrapper
                as="label"
                {...wrapperProps}
                className={classNames(
                    `color--${color}`,
                    `shape--${shape}`,
                    `type--radio`,
                    { disabled },
                    className,
                )}
                aria-disabled={disabled}
            >
                {children}
                <Radio
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    name={name}
                    value={value}
                    {...props}
                    wrapperProps={{
                        className: 'tile-input',
                    }}
                    ref={ref}
                >
                    <div className="tile-icon">
                        <CheckCircleFilled color='action_interactive' size='size_24' />
                    </div>
                </Radio>
            </TileWrapper>
        )
    },
)

type RadioTileRef = RadioRef

type RadioTileOverrideProps = 'wrapperProps'

interface RadioTileProps extends Omit<RadioProps, RadioTileOverrideProps> {
    /**
     * Apply disabled styling if 'true'
     */
    disabled?: boolean
    /**
     * Changes card styling to provided variant style
     */
    color?: 'surface' | 'subdued'
    /**
     * Shape of the edges
     */
    shape?: 'rounded' | 'squared'
    /**
     * Value of the internal `input`
     */
    value?: string
    /**
     * Whether or not `RadioTile` is checked
     */
    checked?: RadioProps['checked']
    /**
     * Whether or not the radio is checked by default
     */
    defaultChecked?: RadioProps['defaultChecked']
    /**
     * DOM Name of the internal `input`
     * Note: Required when NOT a child of `RadioGroup`
     */
    name?: string
    /**
     * `onChange` function triggered when value of `input` changes
     * Chained through `RadioGroup` parent if present
     */
    onChange?: RadioProps['onChange']
    /**
     * Used to apply props on the radio wrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLLabelElement>
}

RadioTile.bdsName = 'RadioTile'

export { RadioTile }

export type { RadioTileProps, RadioTileRef }

export default RadioTile
