import * as React from 'react'
import classNames from 'classnames'

import SuccessFilled from '@lowes-tech/bds-icons/SuccessFilled'
import CloseIcon from '@lowes-tech/bds-icons/Close'
import ErrorFilled from '@lowes-tech/bds-icons/ErrorFilled'

import Typography from '../Typography'
import Spinner from '../Spinner'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'

import { FileUploadContext } from './FileUploadProvider'
import type { FileUploadFile } from './FileUploadProvider'

import FileUploadItemWrapper from './styles/FileUploadItemWrapper'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React File Upload Item
 *
 * @internal
 *
 * Handles the UI for each file item the user submits in `FileUpload`
 *
 * API:
 *
 * - [FileUploadItem API](https://backyard.lowes.com/ComponentsAPI/FileUploadItem)
 */
const FileUploadItem: BDSForwardRef<FileUploadItemProps> = React.forwardRef<
    FileUploadItemRef,
    FileUploadItemProps
>(function FileUploadItem(
    { children, className, state: stateProp = 'enabled', name, id, ...props },
    ref,
) {
    // Hold current state of the file item
    const [state, setState] = React.useState(stateProp)

    // Use context from `FileUploadProvider`
    const { removeFile, delayCompleted, shape } = React.useContext(FileUploadContext)

    // File removing function handler
    const handleRemove = () => removeFile(id)

    // Calculate `icon` for...
    const icon = (() => {
        // When `state` is...
        switch (state) {
            // ... loading, show spinner
            case 'loading':
                return <Spinner show small inline color="icon_interactive" />

            // ... completed, show completion icon
            case 'completed':
                return <SuccessFilled color="icon_green" size='size_20' />

            // ... rejected or error, show red close circle
            case 'rejected':
            case 'error':
                return (
                    <ErrorFilled
                        size='size_20'
                        color="icon_red"
                        aria-hidden='false'
                        aria-label="close"
                        role="button"
                        tabIndex={0}
                        onClick={handleRemove}
                    />
                )

            // ... accepted or enabled, show close icon
            case 'accepted':
            case 'enabled':
            default:
                return (
                    <CloseIcon
                        color="text_tertiary"
                        aria-label="close"
                        aria-hidden='false'
                        role="button"
                        tabIndex={0}
                        onClick={handleRemove}
                    />
                )
        }
    })()

    // Side effect to animate transition from `completed` to `accepted` automatically
    React.useEffect(() => {
        let timeout

        // Set new component's state from parent change
        setState(stateProp)

        // If `delayComplete` is defined and `state` is `completed`,
        if (delayCompleted && stateProp === 'completed') {
            // Set timeout to delay transition to `accepted`
            timeout = setTimeout(() => {
                setState('accepted')
            }, delayCompleted)
        }

        // Clean up `timeout` if component unmounts during transition
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [stateProp])

    return (
        <FileUploadItemWrapper
            className={classNames('file-upload-item', `shape--${shape}`, state, className)}
            {...props}
            ref={ref}
        >
            <Typography variant="caption" className="file-upload-item-label">
                {name}
            </Typography>
            <span className="file-upload-item-icon">{icon}</span>
        </FileUploadItemWrapper>
    )
})

type FileUploadItemRef = HTMLLIElement

type FileUploadItemOverrideProps = 'name' | 'size' | 'type'

interface FileUploadItemProps
    extends BackyardBaseProps<FileUploadItemRef, FileUploadItemOverrideProps>,
        FileUploadFile {
    /**
     * Unique ID of the file
     */
    id?: string
    /**
     * Name of the file
     */
    name: string
    /**
     * State of the file
     */
    state?: FileUploadFile['state']
}

FileUploadItem.bdsName = 'FileUploadItem'

export { FileUploadItem }

export { FileUploadItemProps, FileUploadItemRef }

export default FileUploadItem
