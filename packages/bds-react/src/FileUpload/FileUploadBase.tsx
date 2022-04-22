import * as React from 'react'
import classNames from 'classnames'
import type { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone'

import Button, { ButtonProps } from '../Button'
import Typography from '../Typography'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'

import FileUploadItem from './FileUploadItem'
import { FileUploadContext } from './FileUploadProvider'
import type { FileUploadFile } from './FileUploadProvider'
import FileUploadWrapper from './styles/FileUploadWrapper'
import Alert from '../Alert'
import type { AlertProps } from '../Alert'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { getPropsDerived } from './hooks/useFileReducer'

/**
 * Backyard React File Upload Base
 *
 * @internal
 *
 * This component handles the UI for `FileUpload`
 *
 * Use `FileUpload` instead of this component
 */
const FileUploadBase: BDSForwardRef<FileUploadBaseProps> = React.forwardRef<
    FileUploadBaseRef,
    FileUploadBaseProps
>(function FileUploadBase(
    {
        children: childrenProp,
        className,
        heading = 'Upload',
        caption = 'only files of 500mb or less',
        errorText = 'Error uploading file(s)',
        buttonProps,
        errorAlertProps,
        dropzoneProps,
        inputProps,
        ...props
    },
    ref,
) {
    // Get context from provider
    const {
        files,
        open,
        getRootProps,
        getInputProps,
        disabled,
        variant = 'dropzone',
        label,
        isDragActive,
        hasError,
        shape,
    } = React.useContext(FileUploadContext)

    // Dropzone default classes
    const dropzoneClasses = {
        'drag-active': isDragActive,
    }

    // Calculate `children` as...
    const children = (() => {
        // Use `children` prop if defined
        if (childrenProp) {
            return childrenProp
        }

        // Else, create a default label
        return (
            <div className="file-upload-label">
                <Typography className="file-upload-heading" variant="h5">
                    {heading}
                </Typography>
                <Typography
                    className="file-upload-caption"
                    variant="caption"
                    color="text_tertiary"
                    as="div"
                >
                    {caption}
                </Typography>
            </div>
        )
    })()

    // Calculate `input` as...
    const input = (() => {
        // When `variant` is...
        switch (variant) {
            // ... a `button`,
            case 'button':
                // Create a `<Button />` input
                return (
                    <span
                        {...getRootProps({
                            ...dropzoneProps,
                            className: classNames(
                                'file-upload-button',
                                dropzoneClasses,
                                { disabled },
                                dropzoneProps?.className,
                            ),
                        })}
                        tabIndex={-1}
                    >
                        <input
                            {...getInputProps({
                                ...inputProps,
                                className: classNames('file-upload-input', inputProps?.className),
                            })}
                        />
                        <Button
                            className="file-upload-button-label"
                            variant="primary"
                            disabled={disabled}
                            onClick={open}
                            shape={shape}
                            {...buttonProps}
                        >
                            {label || 'Upload'}
                        </Button>
                    </span>
                )

            // ... a `dropzone` or by default...
            case 'dropzone':
            default:
                // Create an interactable `dropzone` area
                return (
                    <span
                        {...getRootProps({
                            ...dropzoneProps,
                            className: classNames(
                                'file-upload-dropzone',
                                dropzoneClasses,
                                { disabled },
                                dropzoneProps?.className,
                            ),
                        })}
                    >
                        <input
                            {...getInputProps({
                                ...inputProps,
                                className: classNames('file-upload-input', inputProps?.className),
                            })}
                        />
                        <Typography
                            className="file-upload-dropzone-label"
                            variant="body_1"
                            align="center"
                            as="label"
                        >
                            {label || 'Drag and drop files here or click to upload'}
                        </Typography>
                    </span>
                )
        }
    })()

    // Calculate errors from files...
    const errors = files
        // Map each file to a list of (list of errors)
        .map((file) => file.errors?.map((error) => error))
        // Flatten list to a list of error
        .reduce((acc, val) => acc.concat(val), [])
        // Filter out duplicate error messages
        .filter((v, i, a) => a.findIndex((t) => t?.message === v?.message) === i)
        // Filter out falsy errors
        .filter(Boolean)

    // Calculate `errorAlert` only when `files` or `hasError` has changed...
    const errorAlert = React.useMemo(
        () =>
            // If any file has an error, render an error `Alert`
            hasError ? (
                <Alert
                    className="file-upload-alert"
                    type="error"
                    title={errorText}
                    multiline
                    elevation={false}
                    shape={shape}
                    {...errorAlertProps}
                >
                    {errors.map((error) =>
                        // Map each appropriate error message to a child of `Alert`
                        error?.message ? (
                            <div
                                key={error.code || error.message}
                                className={classNames('file-upload-error', error.code)}
                            >
                                {error.message}
                            </div>
                        ) : null,
                    )}
                </Alert>
            ) : null, // Else don't render an `Alert`
        [files, hasError],
    )

    // Calculate the `fileList` only when `files` changes...
    const fileList = React.useMemo(
        () => (
            <ul className="file-upload-items">
                {files.map((file) => {
                    // Get props from `FileUploadFile`
                    const fileProps = getPropsDerived<FileUploadFile>(file)

                    // Render item via `FileUploadFile` props
                    return <FileUploadItem key={fileProps.id} {...fileProps} />
                })}
            </ul>
        ),
        [files],
    )

    return (
        <FileUploadWrapper
            className={classNames('file-upload-wrapper', `shape--${shape}`, className)}
            {...props}
            ref={ref}
        >
            {children}
            {input}
            {errorAlert}
            {fileList}
        </FileUploadWrapper>
    )
})

type FileUploadBaseRef = HTMLDivElement

type FileUploadBaseOverrideProps =
    | 'accept'
    | 'onDragLeave'
    | 'onDragEnter'
    | 'onDragOver'
    | 'onDrop'

interface FileUploadBaseProps
    extends BackyardBaseProps<FileUploadBaseRef, FileUploadBaseOverrideProps> {
    /**
     * Buton override props.
     */
    buttonProps?: ButtonProps
    /**
     * Heading text of the component
     */
    heading?: string
    /**
     * Caption text of the component
     */
    caption?: string
    /**
     * Error text to display to user on an error
     */
    errorText?: AlertProps['title']
    /**
     * `AlertProps` to extend error `Alert` with
     */
    errorAlertProps?: AlertProps
    /**
     * `DropzoneRootProps` to extend `react-dropzone` with
     *
     * See https://react-dropzone.js.org/#src for props
     */
    dropzoneProps?: DropzoneRootProps
    /**
     * `DropzoneInputProps` to extend input component with
     * See https://react-dropzone.js.org/#src for props
     */
    inputProps?: DropzoneInputProps
}

FileUploadBase.bdsName = 'FileUploadBase'

export { FileUploadBase }

export type { FileUploadBaseProps, FileUploadBaseRef }

export default FileUploadBase
