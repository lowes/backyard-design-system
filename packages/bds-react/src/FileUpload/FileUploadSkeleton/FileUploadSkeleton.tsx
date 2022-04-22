import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import type { FileUploadProps } from '../FileUpload'

/**
 * Backyard React File Upload Skeleton
 */
const FileUploadSkeleton: BDSForwardRef<FileUploadSkeletonProps> = React.forwardRef<
    FileUploadSkeletonRef,
    FileUploadSkeletonProps
>(function FileUploadSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        variant = 'button',
        animate = false,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'FileUploadSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const input = (() => {
        switch (variant) {
            case 'dropzone':
                return (
                    <Skeleton
                        className={classNames(
                            'file-upload--dropzone',
                            'variant--button',
                            className,
                        )}
                        variant="rect"
                        shape={shape}
                        animate={animate}
                        height="size_128"
                        style={{
                            marginTop: theme.sizes.size_16,
                            ...style,
                        }}
                        {...props}
                        ref={ref}
                    />
                )

            case 'button':
            default:
                return (
                    <Skeleton
                        className={classNames(
                            'file-upload--button',
                            'variant--dropzone',
                            className,
                        )}
                        variant="rect"
                        shape={shape}
                        animate={animate}
                        width={theme.sizes.size_84}
                        height='size_48'
                        style={{
                            marginTop: theme.sizes.size_16,
                            ...style,
                        }}
                        {...props}
                        ref={ref}
                    />
                )
        }
    })()

    return (
        <div className="file-upload--skeleton">
            <Skeleton
                className={classNames('file-upload--title', className)}
                variant="text"
                shape={shape}
                animate={animate}
            />
            <Skeleton
                className={classNames('file-upload--caption', className)}
                variant="text"
                shape={shape}
                animate={animate}
                style={{
                    marginTop: theme.sizes.size_16,
                }}
            />
            {input}
        </div>
    )
})

type FileUploadSkeletonRef = SkeletonRef

type FileUploadSkeletonOverrideProps = 'variant'

interface FileUploadSkeletonProps extends Omit<SkeletonProps, FileUploadSkeletonOverrideProps> {
    /**
     * Variant of the file upload to skeleton
     */
    variant?: FileUploadProps['variant']
}

FileUploadSkeleton.bdsName = 'FileUploadSkeleton'

export { FileUploadSkeleton }

export type { FileUploadSkeletonProps, FileUploadSkeletonRef }

export default FileUploadSkeleton
