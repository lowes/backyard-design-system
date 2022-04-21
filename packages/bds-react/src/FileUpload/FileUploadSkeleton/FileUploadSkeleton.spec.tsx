import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import FileUploadSkeleton from './FileUploadSkeleton'

describe('FileUploadSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <FileUploadSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders as dropzone', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <FileUploadSkeleton variant="dropzone" animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
