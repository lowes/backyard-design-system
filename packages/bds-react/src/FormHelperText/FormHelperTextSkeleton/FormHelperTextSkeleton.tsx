import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import { useFormControl } from '../../FormControl'
import type { FormHelperTextProps } from '../FormHelperText'

/**
 * Backyard React Text Field Skeleton
 */
const FormHelperTextSkeleton: BDSForwardRef<FormHelperTextSkeletonProps> = React.forwardRef<
    FormHelperTextSkeletonRef,
    FormHelperTextSkeletonProps
>(function FormHelperTextSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        style,
        indent: indentProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'TextField',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    let { indent } = useFormControl({ noContext: true })

    // Props override calculated values
    if (indentProp !== undefined) indent = indentProp

    // Default values
    if (indent === undefined) indent = 'size_16'

    return (
        <Skeleton
            className={classNames('helper-text--skeleton', className)}
            variant="text"
            shape={shape}
            animate={animate}
            height="size_16"
            style={{
                width: 'auto',
                ...(indent
                    ? {
                          margin: `0 ${
                              typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16
                          }`,
                      }
                    : {}),
                marginTop: theme.sizes.size_8,
                ...style,
            }}
            {...props}
            ref={ref}
        />
    )
})

type FormHelperTextSkeletonRef = SkeletonRef

interface FormHelperTextSkeletonProps extends SkeletonProps {
    indent?: FormHelperTextProps['indent']
}

FormHelperTextSkeleton.bdsName = 'FormHelperTextSkeleton'

export { FormHelperTextSkeleton }

export type { FormHelperTextSkeletonProps, FormHelperTextSkeletonRef }

export default FormHelperTextSkeleton
