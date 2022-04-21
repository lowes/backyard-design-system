import * as React from 'react'
import { render, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import FileUpload from './FileUpload'
import mockFiles from './mocks/files'

describe('FileUpload Snapshots', () => {
    test('default snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload />
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('disabled snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload
                    disabled
                />
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`${theme} theme snapshot`, async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider theme={theme}>
                            <FileUpload />
                        </ThemeProvider>
                    )
                })

                const { asFragment } = wrapper

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('variants', () => {
        const variants = ['button', 'dropzone']

        variants.forEach((variant) => {
            test(`${variant} variant snapshot`, async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <FileUpload variant={variant} />
                    )
                })

                const { asFragment } = wrapper

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('default files snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload
                    defaultFiles={mockFiles}
                />
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('file states snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload
                    defaultFiles={[
                        { ...mockFiles[0], state: 'loading' },
                        { ...mockFiles[1], state: 'completed' },
                        { ...mockFiles[2], state: 'rejected' },
                        { ...mockFiles[2], state: 'error' },
                        { ...mockFiles[3], state: 'accepted' },
                        { ...mockFiles[3], state: 'enabled' }
                    ]}
                />
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('file delayed complete snapshot', async () => {
        jest.useFakeTimers()

        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload
                    delayCompleted={1}
                    defaultFiles={[
                        { ...mockFiles[0], state: 'completed' }
                    ]}
                />
            )
            
            jest.runAllTimers()
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('custom children snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <FileUpload>
                    <div className="custom" />
                </FileUpload>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
