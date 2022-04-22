import * as React from 'react'

import FileUploadProvider from './FileUploadProvider'
import type { FileUploadProviderProps } from './FileUploadProvider'
import FileUploadBase from './FileUploadBase'
import type { FileUploadBaseProps, FileUploadBaseRef } from './FileUploadBase'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { ButtonProps } from '../Button'

/**
 * *Backyard React File Upload*
 *
 * Handles the UI/UX for users to submit files to an `onDrop` handler
 *
 * Documentation:
 *
 * - [FileUpload](https://backyard.lowes.com/Components/FileUpload)
 *
 * API:
 *
 * - [FileUpload API](https://backyard.lowes.com/ComponentsAPI/FileUpload)
 * - inherits [FileUploadProvider API](https://backyard.lowes.com/ComponentsAPI/FileUploadProvider)
 *
 */
const FileUpload: BDSForwardRef<FileUploadProps> = React.forwardRef<FileUploadRef, FileUploadProps>(
    function FileUpload(
        {
            children,
            defaultFiles = [],
            delayCompleted = 2000,
            label,
            variant = 'dropzone',
            shape, // = 'rounded',
            options,
            override,
            accept,
            maxFiles = 0,
            minSize,
            maxSize = 524288000,
            multiple = true,
            preventDropOnDocument,
            noClick,
            noKeyboard,
            noDrag,
            noDragEventsBubbling,
            disabled = false,
            onChange,
            onDrop,
            onDropAccepted,
            onDropRejected,
            onFileDialogCancel,
            onFileAdd,
            onFileRemove,
            onError,
            onSuccess,
            ...props
        },
        ref,
    ) {
        // `FileUploadProvider` props, extracted from `props`
        // Must replicate `FileUploadProviderProps`
        const providerProps = {
            shape,
            defaultFiles,
            delayCompleted,
            label,
            variant,
            options,
            override,
            accept,
            maxFiles,
            minSize,
            maxSize,
            multiple,
            preventDropOnDocument,
            noClick,
            noKeyboard,
            noDrag,
            noDragEventsBubbling,
            disabled,
            onChange,
            onDrop,
            onDropAccepted,
            onDropRejected,
            onFileDialogCancel,
            onFileAdd,
            onFileRemove,
            onError,
            onSuccess,
        }

        /**
         * Layout:
         *
         *  <div>
         *      ...
         *  </div>
         */
        return (
            <FileUploadProvider {...providerProps}>
                <FileUploadBase {...props} ref={ref}>
                    {children}
                </FileUploadBase>
            </FileUploadProvider>
        )
    },
)

type FileUploadRef = FileUploadBaseRef

type FileUploadOverrideProps = 'onError' | 'onSuccess' | 'onChange'

interface FileUploadProps
    extends Omit<FileUploadBaseProps, FileUploadOverrideProps>,
        FileUploadProviderProps {
    /**
     * Buton override props.
     */
    buttonProps?: ButtonProps
    /**
     * FileUploadProviderProps
     */

    /**
     * List of default files that are preloaded into the component
     *
     * Example:
     * ```
     *  defaultFiles={[
     *      // Can be any instance of File
     *      new File([""], 'file-example.png', { type: 'image/png' }),
     *      // Can be an object with File properties
     *      {
     *          name: 'file-example-2.pdf',
     *          lastModified: 1579187229298,
     *          size: 1462,
     *          type: 'application/pdf',
     *          // Can also include the state of the file
     *          state: 'error',
     *          errors: [{ message: 'No PDFs allowed', code: 'an-error' }]
     *      }
     *  ]}
     * ```
     */
    defaultFiles?: FileUploadProviderProps['defaultFiles']
    /**
     * Number of milliseconds to delay file item's animated transition from
     * `completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state
     *
     * Set to `false` to disable the transition
     * Note: The `<Checkbox />` is not interactable for the user
     */
    delayCompleted?: FileUploadProviderProps['delayCompleted']
    /**
     * Label of the upload input (`dropzone` or the `button` variant)
     *
     * Default value depends on `variant` prop
     * - 'dropzone' => 'Drag and drop files here or click to upload'
     * - 'button' => 'Upload'
     */
    label?: FileUploadProviderProps['label']
    /**
     * Changes the rendered file upload input component
     * Either a `button` or a `dropzone`
     * Note: Both can have files dropped onto them
     */
    variant?: FileUploadProviderProps['variant']
    /**
     * Shape of the file upload components
     */
    shape?: FileUploadProviderProps['shape']
    /**
     * Options to customize `react-dropzone` dependency
     * See https://react-dropzone.js.org/#src for more information
     */
    options?: FileUploadProviderProps['options']
    /**
     * `FileUploadProvider` override props to provide to children
     */
    override?: FileUploadProviderProps['override']
    /**
     * File MIME type that 'react-dropzone' will use to accept or reject a file on the client.
     * Always validate files on a server instead of relying on the client.
     * See https://github.com/react-dropzone/attr-accept for more information.
     */
    accept?: FileUploadProviderProps['accept']
    /**
     * Maximum number of files that can be selected at a time
     */
    maxFiles?: number
    /**
     * Minimum size allowed for the files
     */
    minSize?: FileUploadProviderProps['minSize']
    /**
     * Maximum size allowed for the files
     */
    maxSize?: FileUploadProviderProps['maxSize']
    /**
     * Whether or not multiple files can be uploaded
     */
    multiple?: FileUploadProviderProps['multiple']
    /**
     * If false, allow dropped items to take over the current browser window
     */
    preventDropOnDocument?: FileUploadProviderProps['preventDropOnDocument']
    /**
     * If true, remove `onClick` handling that will display file selection
     */
    noClick?: FileUploadProviderProps['noClick']
    /**
     * If true, remove `onKeyDown` handling that will display file selection
     */
    noKeyboard?: FileUploadProviderProps['noKeyboard']
    /**
     * If true, remove drag events handling
     */
    noDrag?: FileUploadProviderProps['noDrag']
    /**
     * If true, disable the file upload input (button or dropzone)
     */
    disabled?: FileUploadProviderProps['disabled']
    /**
     * Trigger function on drop event or when files are selected via menu.
     * 
     * Note: Alias of `onDrop` for convenience
     *
     * `function(event: DropEvent, info: FileUploadDropInfo) => void`
     * - event: The event source of the callback
     * - info: `{ files: Files, acceptedFiles: Files, rejectedFiles: Files }`
     */
    onChange?: FileUploadProviderProps['onChange']
    /**
     * Trigger function on drop event or when files are selected via menu.
     *
     * `function(event: DropEvent, info: FileUploadDropInfo) => void`
     * - event: The event source of the callback
     * - info: `{ files: Files, acceptedFiles: Files, rejectedFiles: Files }`
     */
    onDrop?: FileUploadProviderProps['onDrop']
    /**
     * Trigger function on drop event when files are accepted by `react-dropzone`
     *
     * Note: This function only provides raw `File` instances
     *
     * See https://react-dropzone.js.org/#src for more information
     *
     * `(files: File[], event: DropEvent) => void`
     * - files: List of files that were accepted
     * - event: The event source of the callback
     */
    onDropAccepted?: FileUploadProviderProps['onDropAccepted']
    /**
     * Trigger function on drop event when files are rejected by `react-dropzone`
     *
     * Note: This function only provides raw `File` instances
     *
     * See https://react-dropzone.js.org/#src for more information
     *
     * `(files: File[], event: DropEvent) => void`
     * - files: List of files that were accepted
     * - event: The event source of the callback
     */
    onDropRejected?: FileUploadProviderProps['onDropRejected']
    /**
     * Trigger function for when user cancels the file selection dialog
     *
     * `function() => void`
     */
    onFileDialogCancel?: FileUploadProviderProps['onFileDialogCancel']
    /**
     * Trigger function for when files are added
     *
     * `function(files: Files) => void`
     * - files: List of files that were added
     */
    onFileAdd?: FileUploadProviderProps['onFileAdd']
    /**
     * Trigger function for when files are removed
     *
     * `function(files: Files) => void`
     * - files: List of files that were removed
     */
    onFileRemove?: FileUploadProviderProps['onFileRemove']
    /**
     * Trigger function for when an error is in one or more files.
     *
     * `function(files: Files) => void`
     * - files: List of files that contain an error
     */
    onError?: FileUploadProviderProps['onError']
    /**
     * Trigger function for when no file has an error.
     * `function(files: Files) => void`
     * - files: List of files that do not contain an error
     */
    onSuccess?: FileUploadProviderProps['onSuccess']

    /**
     * FileUploadBaseProps
     */

    /**
     * Heading text of the component
     *
     * Add a relevant title to what the user is submitting for
     *
     * Defaults to `Upload`
     */
    heading?: FileUploadBaseProps['heading']
    /**
     * Caption text of the component
     *
     * Add a relevant caption to describe what the user should submit
     *
     * Defaults to `Caption text of the component above the upload input`
     */
    caption?: FileUploadBaseProps['caption']
}

FileUpload.bdsName = 'FileUpload'

export { FileUpload }

export type { FileUploadProps, FileUploadRef }

export default FileUpload
