import * as React from 'react'
import { render, act, fireEvent, waitFor } from '../../test-utils'

import FileUpload from './FileUpload'
import { FileUploadContext } from './FileUploadProvider'
import mockFiles from './mocks/files'

describe('FileUpload Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <FileUpload 
                data-testid="file-upload"
            />
        )

        const fileUpload = getByTestId('file-upload')

        expect(fileUpload).toBeInTheDocument()
    })

    test('file remove click', async () => {
        const onFileRemoveSpy = jest.fn()
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    defaultFiles={mockFiles}
                    onFileRemove={onFileRemoveSpy}
                />
            )
        })

        const { getByTestId } = wrapper

        const upload = getByTestId('file-upload')
        const buttons = upload.querySelectorAll('.icon-close')

        expect(buttons[2]).toBeInTheDocument()

        fireEvent.click(buttons[2])

        expect(buttons[2]).not.toBeInTheDocument()
        expect(onFileRemoveSpy).toHaveBeenCalled()
    })

    test('file add', async () => {
        const onFileAddSpy = jest.fn()
        let wrapper

        const CustomChild = () => {
            const { addFile } = React.useContext(FileUploadContext)

            // Add file when child renders
            React.useEffect(() => addFile(mockFiles[0]), [])

            return <div />
        }

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    onFileAdd={onFileAddSpy}
                >
                    <CustomChild />
                </FileUpload>
            )
        })

        expect(onFileAddSpy).toHaveBeenCalled()
    })

    test('drop files', async () => {
        const files = [createFile('file1.pdf', 1111, 'application/pdf')]
        const event = createDtWithFiles(files)
        const onDropSpy = jest.fn()

        let wrapper

        const ui = (
            <FileUpload
                data-testid="file-upload"
                onDrop={onDropSpy}
            />
        )

        await act(async () => {
            wrapper = render(ui)
        })

        const { getByTestId, rerender } = wrapper

        const upload = getByTestId('file-upload')
        const dropzone = upload.querySelector('.file-upload-dropzone')

        fireEvent.drop(dropzone, event)
        await flushPromises(rerender, ui)

        expect(onDropSpy).toHaveBeenCalled()
    })

    test('drop file state updates', async () => {
        const event = createDtWithFiles(mockFiles)
        const onErrorSpy = jest.fn()
        const onSuccessSpy = jest.fn()
        const onDropSpy = jest.fn((event, { acceptedFiles }) => {
            acceptedFiles.forEach((file, index) => {
                // If upload fails...
                if (index % 2) {
                    file.setState('error', [{
                        message: 'error',
                        code: 'error'
                    }])
                } else {
                    // Else, show upload completed!
                    file.setState('completed')
                }
            })
        })

        let wrapper

        const ui = (
            <FileUpload
                data-testid="file-upload"
                onDrop={onDropSpy}
                onError={onErrorSpy}
                onSuccess={onSuccessSpy}
            />
        )

        await act(async () => {
            wrapper = render(ui)
        })

        const { getByTestId, rerender } = wrapper

        const upload = getByTestId('file-upload')
        const dropzone = upload.querySelector('.file-upload-dropzone')

        fireEvent.drop(dropzone, event)
        await flushPromises(rerender, ui)

        expect(onDropSpy).toHaveBeenCalled()
        expect(onErrorSpy).toHaveBeenCalled()
        expect(onSuccessSpy).toHaveBeenCalled()
    })

    test('single file state', async () => {
        const event = createDtWithFiles([mockFiles[0]])
        const onDropSpy = jest.fn((event, { acceptedFiles }) => {
            acceptedFiles.forEach((file) => {
                file.setState('created')
                file.setErrors([{
                    message: 'error',
                    code: 'error'
                }])
            })
        })

        let wrapper

        const ui = (
            <FileUpload
                data-testid="file-upload"
                onDrop={onDropSpy}
            />
        )

        await act(async () => {
            wrapper = render(ui)
        })

        const { getByTestId, rerender } = wrapper

        const upload = getByTestId('file-upload')
        const dropzone = upload.querySelector('.file-upload-dropzone')

        fireEvent.drop(dropzone, event)
        await flushPromises(rerender, ui)

        expect(onDropSpy).toHaveBeenCalled()
    })

    test('accept or reject', async () => {
        const files = [createFile('file1.pdf', 1111, 'application/pdf')]
        const event = createDtWithFiles(files)
        const onDropSpy = jest.fn()

        let wrapper

        const ui = (
            <FileUpload
                data-testid="file-upload"
                options={{
                    accept: "image/png"
                }}
                onDrop={onDropSpy}
            />
        )

        await act(async () => {
            wrapper = render(ui)
        })

        const { getByTestId, rerender } = wrapper

        const upload = getByTestId('file-upload')
        const dropzone = upload.querySelector('.file-upload-dropzone')

        fireEvent.drop(dropzone, event)
        await flushPromises(rerender, ui)

        expect(onDropSpy).toHaveBeenCalled()
    })

    test('file reducer wrong action', async () => {
        const onFileAddSpy = jest.fn()
        const onFileRemoveSpy = jest.fn()
        let wrapper

        const CustomChild = () => {
            const { fileReducer } = React.useContext(FileUploadContext)

            // Add file when child renders
            React.useEffect(() => {
                fileReducer({
                    type: 'asdf'
                })
            }, [])

            return <div />
        }

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    onFileAdd={onFileAddSpy}
                    onFileRemove={onFileRemoveSpy}
                >
                    <CustomChild />
                </FileUpload>
            )
        })

        expect(onFileAddSpy).not.toHaveBeenCalled()
        expect(onFileRemoveSpy).not.toHaveBeenCalled()
    })

    test('file reducer modify multiple files', async () => {
        const onFileAddSpy = jest.fn()
        const onFileRemoveSpy = jest.fn()
        const onErrorSpy = jest.fn()
        let wrapper

        const CustomChild = () => {
            const { fileReducer } = React.useContext(FileUploadContext)

            // Add file when child renders
            React.useEffect(() => {
                fileReducer({
                    type: 'modify',
                    file: [{ ...mockFiles[0], state: 'error' }, { ...mockFiles[1], state: 'error' }]
                })
            }, [])

            return <div />
        }

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    defaultFiles={mockFiles}
                    onFileAdd={onFileAddSpy}
                    onFileRemove={onFileRemoveSpy}
                    onError={onErrorSpy}
                >
                    <CustomChild />
                </FileUpload>
            )
        })

        expect(onFileAddSpy).toHaveBeenCalled()
        expect(onFileRemoveSpy).not.toHaveBeenCalled()
        expect(onErrorSpy).toHaveBeenCalled()
    })

    test('file reducer remove multiple files', async () => {
        const onFileAddSpy = jest.fn()
        const onFileRemoveSpy = jest.fn()
        let wrapper

        const CustomChild = () => {
            const { fileReducer } = React.useContext(FileUploadContext)

            // Remove file when child renders
            React.useEffect(() => {
                fileReducer({
                    type: 'remove',
                    id: [mockFiles[0].id, mockFiles[1].id]
                })
            }, [])

            return <div />
        }

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    defaultFiles={mockFiles}
                    onFileAdd={onFileAddSpy}
                    onFileRemove={onFileRemoveSpy}
                >
                    <CustomChild />
                </FileUpload>
            )
        })

        expect(onFileAddSpy).toHaveBeenCalled()
        expect(onFileRemoveSpy).toHaveBeenCalled()
    })

    test('file reducer add multiple files', async () => {
        const onFileAddSpy = jest.fn()
        const onFileRemoveSpy = jest.fn()
        let wrapper

        const CustomChild = () => {
            const { fileReducer } = React.useContext(FileUploadContext)

            // Remove file when child renders
            React.useEffect(() => {
                fileReducer({
                    type: 'add',
                    file: [mockFiles[0], mockFiles[1]]
                })
            }, [])

            return <div />
        }

        await act(async () => {
            wrapper = render(
                <FileUpload
                    data-testid="file-upload"
                    onFileAdd={onFileAddSpy}
                    onFileRemove={onFileRemoveSpy}
                >
                    <CustomChild />
                </FileUpload>
            )
        })

        expect(onFileAddSpy).toHaveBeenCalled()
        expect(onFileRemoveSpy).not.toHaveBeenCalled()
    })
})

async function flushPromises(rerender, ui) {
    await act(() => waitFor(() => rerender(ui)))
}

function createFile(name, size, type) {
    const file = new File([], name, { type })
    Object.defineProperty(file, 'size', {
        get() {
            return size
        }
    })
    return file
}

function createDtWithFiles(files = []) {
    return {
        dataTransfer: {
            files,
            items: files.map(file => ({
                kind: 'file',
                size: file.size,
                type: file.type,
                getAsFile: () => file
            })),
            types: ['Files']
        }
    }
}
