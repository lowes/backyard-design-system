import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import type { TextAreaProps } from '../TextArea'

/**
 * Backyard React Text Area Skeleton
 */
const TextAreaSkeleton: BDSForwardRef<TextAreaSkeletonProps> = React.forwardRef<
    TextAreaSkeletonRef,
    TextAreaSkeletonProps
>(function TextAreaSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        rows = 4,
        helperText,
        max,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'TextAreaSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <>
            <Skeleton
                className={classNames('textarea--skeleton', className)}
                variant="rect"
                shape={shape}
                animate={animate}
                height={`calc(${rows > 1 ? rows + 1 : '0'}.5rem + ${theme.sizes.size_32})`}
                {...props}
                ref={ref}
            />
            {max || helperText ? (
                <div
                    style={{
                        display: 'flex',
                        marginTop: theme.sizes.size_8,
                        padding: `0 ${theme.sizes.size_16}`,
                    }}
                >
                    {helperText ? (
                        <Skeleton
                            className="helper-text--skeleton"
                            variant="text"
                            shape={shape}
                            animate={animate}
                            style={{
                                width: '100%',
                                float: 'left',
                            }}
                        />
                    ) : (
                        <div style={{ width: '100%' }} />
                    )}
                    {max ? (
                        <Skeleton
                            className="helper-counter--skeleton"
                            variant="text"
                            shape={shape}
                            animate={animate}
                            style={{
                                width: theme.sizes.size_44,
                                marginLeft: helperText ? theme.sizes.size_16 : 0,
                                float: 'right',
                            }}
                        />
                    ) : null}
                </div>
            ) : null}
        </>
    )
})

type TextAreaSkeletonRef = SkeletonRef

type TextAreaSkeletonOverrideProps = 'max'

interface TextAreaSkeletonProps extends Omit<SkeletonProps, TextAreaSkeletonOverrideProps> {
    /**
     * Rows of the text area
     */
    rows?: TextAreaProps['rows']
    /**
     * Whether or not textarea has `helperText` prop
     */
    helperText?: boolean
    /**
     * Whether or not textarea has `max` prop
     */
    max?: boolean
}

TextAreaSkeleton.bdsName = 'TextAreaSkeleton'

export { TextAreaSkeleton }

export type { TextAreaSkeletonProps, TextAreaSkeletonRef }

export default TextAreaSkeleton
