import * as React from 'react'
import { useDropzone } from 'react-dropzone'
import type { DropzoneOptions, DropzoneState, FileError, DropEvent } from 'react-dropzone'

import { BDSFunctional } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import useFileReducer from './hooks/useFileReducer'
import type { FileUploadState, FileUploadAction } from './hooks/useFileReducer'

/**
 * File Upload Context
 */
const FileUploadContext: React.Context<FileUploadContextValues> = React.createContext(null)

/**
 * File Upload Consumer
 */
const FileUploadConsumer: React.Consumer<FileUploadContextValues> = FileUploadContext.Consumer

/**
 * Default options for each variant
 */
const variantOptions: { [key: string]: DropzoneOptions } = {
    // `<Button />` handles our interactions here
    button: {
        noClick: true,
        noKeyboard: true,
    },
    // An interactable `<span />` makes up the interactions here
    dropzone: {},
}

/**
 * Backyard React File Upoad Provider
 *
 * Provides values to children and handles state management of `FileUpload`
 * Use this component to supply your own custom layout
 *
 * Examples:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 *
 * API:
 *
 * - [FileUploadProvider API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUploadProvider)
 */
const FileUploadProvider: BDSFunctional<FileUploadProviderProps> = ({
    accept,
    children,
    disabled = false,
    defaultFiles = [],
    delayCompleted = 2000,
    options = {},
    label,
    maxFiles = 0,
    maxSize = 524288000,
    onSuccess,
    onError,
    onDrop,
    onChange,
    onFileAdd,
    onFileRemove,
    variant = 'dropzone',
    shape: shapeProp, // = 'rounded',
    override,
    ...props
}) => {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'FileUpload',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Memoize context value with external changes
    const context = React.useMemo(
        () => ({ options, accept, disabled, label, maxFiles, variant, shape }),
        [options, accept, disabled, label, maxSize, maxFiles, variant, shape],
    )

    // Use a file reducer to handle basic
    // user interactions with file upload component
    // and the files that they submit
    const {
        state,
        stateReducer,
        addFile,
        removeFile,
        handleDrop,
        hasError,
        hasSuccess,
    } = useFileReducer({
        maxFiles,
        defaultFiles,
        onSuccess,
        onError,
        onFileAdd,
        onFileRemove,
        onChange,
        // @todo Bug in TypeScript
        // TS thinks this shares definition with `useDropzone`
        // Naming collision?
        // @ts-ignore
        onDrop,
        ...options,
    })

    // Use `react-dropzone` dependency to provide more functionality to component
    const dropzone = useDropzone({
        ...props,
        ...variantOptions[variant],
        accept,
        disabled,
        maxSize,
        onDrop: handleDrop,
        ...options,
    })

    // Provide context to children
    return (
        <FileUploadContext.Provider
            value={{
                state,
                files: Object.values(state.value),
                fileReducer: stateReducer,
                hasError,
                hasSuccess,
                delayCompleted,
                addFile,
                removeFile,
                ...context,
                ...dropzone,
                ...override,
            }}
        >
            {children}
        </FileUploadContext.Provider>
    )
}

/**
 * `FileUploadFile` defines an extended `File` instance
 * that provides more UI interactions with them
 */
interface FileUploadFile extends File {
    /**
     * State of the file
     *
     * General life cycle of a file in `FileUpload` is either
     * - `created` ->
     *  - `accepted`
     *  - `rejected`
     * or
     * - `created` -> `loading` ->
     *  - `completed` -> `accepted`
     *  - `error` -> `rejected`
     */
    state?: 'accepted' | 'completed' | 'rejected' | 'error' | 'loading' | 'created' | 'enabled'
    /**
     * List of `FileError`s that define which errors
     * to notify the user about
     *
     * They generally have a `message` and a `code` property
     *
     * Example
     * `[{ message: 'Error message', code: 'error-code' }]
     */
    errors?: FileError[]
    /**
     * Unique ID of the component to distinguish it from other files
     */
    id?: string
    /**
     * Function that modifies any part of `FileUploadFile`
     */
    modify?: (file: FileUploadFile) => void
    /**
     * Removes file from `FileUpload`
     */
    remove?: () => void
    /**
     * Sets a new state for the file and can also set a list of errors
     */
    setState?: (state: FileUploadFile['state'], errors?: FileError[]) => void
    /**
     * Sets a list of errors when state is not being updated
     */
    setErrors?: (errors?: FileError[]) => void
}

/**
 * `FileUploadDropInfo` defines the data provided in `FileUpload`'s `onDrop` event function
 */
type FileUploadDropInfo = {
    /**
     * List of *all* files, rejected or accepted, that are currently managed by the component
     */
    files: Files
    /**
     * List of files that were accepted during the `onDrop` event
     */
    acceptedFiles: Files
    /**
     * List of files that were rejected during the `onDrop` event
     */
    rejectedFiles: Files
}

/**
 * `FileUploadChangeInfo` defines the data provided in the `onChange` event function
 */
type FileUploadChangeInfo = {
    /**
     * List of *all* files, rejected or accepted, that are currently managed by the component
     */
    files: Files
}

/**
 * List of extended `File`s
 */
type Files = FileUploadFile[]

type FileUploadProviderOverrideProps = 'onDrop'

interface FileUploadProviderProps extends Omit<DropzoneOptions, FileUploadProviderOverrideProps> {
    /**
     * File MIME type that 'react-dropzone' will use to accept or reject a file on the client.
     * Always validate files on a server instead of relying on the client.
     * See https://github.com/react-dropzone/attr-accept for more information.
     */
    accept?: string
    /**
     * If true, disable the file upload input (button or dropzone)
     */
    disabled?: boolean
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
    defaultFiles?: Files
    /**
     * Number of milliseconds to delay file item's animated transition from
     * `completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state
     *
     * Set to `false` to disable the transition
     * Note: The `<Checkbox />` is not interactable for the user
     */
    delayCompleted?: number | false
    /**
     * Label of the upload input (`dropzone` or the `button` variant)
     *
     * Default value depends on `variant` prop
     * - 'dropzone' => 'Drag and drop files here or click to upload'
     * - 'button' => 'Upload'
     */
    label?: string
    /**
     * Maximum number of files that can be selected at a time
     */
    maxFiles?: number
    /**
     * Changes the rendered file upload input component
     * Either a `button` or a `dropzone`
     * Note: Both can have files dropped onto them
     */
    variant?: 'button' | 'dropzone'
    /**
     * Shape of the file upload components
     */
    shape?: 'rounded' | 'squared'
    /**
     * Options to customize `react-dropzone` dependency
     * See https://react-dropzone.js.org/#src for more information
     */
    options?: DropzoneOptions
    /**
     * `FileUploadProvider` override props to provide to children
     */
    override?: object
    /**
     * Trigger function on drop event or when files are selected via menu.
     *
     * `function(event: DropEvent, info: FileUploadDropInfo) => void`
     * - event: The event source of the callback
     * - info: `{ files: Files, acceptedFiles: Files, rejectedFiles: Files }`
     */
    onDrop?: (event: DropEvent, info: FileUploadDropInfo) => void
    /**
     * Trigger function when component state changes.
     * 
     * Note: Different from `onDrop`, since it will trigger whenever
     * files are both added or removed via any method.
     *
     * `function(info: FileUploadChangeInfo) => void`
     * - info: `{ files: Files }`
     */
    onChange?: (info: FileUploadChangeInfo) => void
    /**
     * Trigger function for when files are added
     *
     * `function(files: Files) => void`
     * - files: List of files that were added
     * - allFiles: List of all files added to the component
     */
    onFileAdd?: (file: FileUploadFile[], allFiles: FileUploadFile[]) => void
    /**
     * Trigger function for when files are removed
     *
     * `function(files: Files) => void`
     * - files: List of files that were removed
     * - allFiles: List of all files added to the component
     */
    onFileRemove?: (file: FileUploadFile[], allFiles: FileUploadFile[]) => void
    /**
     * Trigger function for when an error is in one or more files.
     *
     * `function(files: Files) => void`
     * - files: List of files that contain an error
     */
    onError?: (errorFiles: Files, successFiles: Files, normalFiles: Files) => void
    /**
     * Trigger function for when no file has an error.
     * `function(files: Files) => void`
     * - files: List of files that do not contain an error
     */
    onSuccess?: (successFiles: Files, errorFiles: Files, normalFiles: Files) => void
}

/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(FileUploadContext)`
 */
interface FileUploadContextValues extends DropzoneOptions, DropzoneState {
    /**
     * State of the file provider reducer
     */
    state: FileUploadState
    /**
     * List of files currently managed by the component
     */
    files: Files
    /**
     * State reducer for the files managed by `FileUpload`
     *
     * See `FileUploadAction` definition and `useFileReducer` file for more information
     */
    fileReducer: React.Dispatch<FileUploadAction>
    /**
     * Whether or not the current list of files contain any errors
     */
    hasError: boolean
    /**
     * Whether or not *all* current files contain no error
     */
    hasSuccess: boolean
    /**
     * Number of milliseconds to delay file item's animated transition from
     * `completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state
     *
     * Set to `false` to disable the transition
     * Note: The `<Checkbox />` is not interactable for the user
     */
    delayCompleted: number | false
    /**
     * Label of the upload input (`dropzone` or the `button` variant)
     *
     * Default value depends on `variant` prop
     * - 'dropzone' => 'Drag and drop files here or click to upload'
     * - 'button' => 'Upload'
     */
    label: FileUploadProviderProps['label']
    /**
     * Changes the rendered file upload input component
     * Either a `button` or a `dropzone`
     * Note: Both can have files dropped onto them
     */
    variant: FileUploadProviderProps['variant']
    /**
     * Shape of the file upload components
     */
    shape: FileUploadProviderProps['shape']
    /**
     * Function to remove a single file from the managed files
     */
    removeFile?: (id: FileUploadFile['id']) => void
    /**
     * Function to add a single file to the managed files
     */
    addFile?: (file: File) => void
}

FileUploadProvider.bdsName = 'FileUploadProvider'

export { FileUploadProvider, FileUploadContext, FileUploadConsumer }

export type {
    FileUploadContextValues,
    FileUploadProviderProps,
    FileUploadDropInfo,
    FileUploadChangeInfo,
    FileUploadFile,
    Files,
}

export default FileUploadProvider
