import * as React from 'react'
import { render, fireEvent, act, RenderResult } from '../../test-utils'

import ThemeProvider from '../ThemeProvider'
import Multiselect from './Multiselect'

describe('Multiselect Tests', () => {
    it('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Multiselect
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                />,
            )
        })

        const { getByTestId } = wrapper

        const dropdown = getByTestId('dropdown')

        expect(dropdown).toBeInTheDocument()
    })

    it('updates selected on change', async () => {
        let wrapper
        const onChangeSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Multiselect
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                    onChange={onChangeSpy}
                />,
            )
        })

        const { getAllByRole } = wrapper

        const [item0, item1, item2, item3] = getAllByRole('checkbox')

        expect(item0.checked).toEqual(false)
        expect(item1.checked).toEqual(false)
        expect(item2.checked).toEqual(false)
        expect(item3.checked).toEqual(false)
        expect(onChangeSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.click(item1)
        })

        expect(item0.checked).toEqual(true)
        expect(item1.checked).toEqual(true)
        expect(item2.checked).toEqual(false)
        expect(item3.checked).toEqual(false)
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
    })

    it('hides options on mouse down', async () => {
        let wrapper
        const onMouseDownSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Multiselect
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                    onMouseDown={onMouseDownSpy}
                />,
            )
        })

        const { container } = wrapper

        const select = container.querySelector('select')

        expect(onMouseDownSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.mouseDown(select)
        })

        expect(onMouseDownSpy).toHaveBeenCalledTimes(1)
    })

    it('triggers blur event', async () => {
        let wrapper
        const onBlurSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <Multiselect
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                    onBlur={onBlurSpy}
                />,
            )
        })

        const { container } = wrapper

        const select = container.querySelector('select')

        expect(onBlurSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.blur(select)
        })

        expect(onBlurSpy).toHaveBeenCalledTimes(1)
    })

    it('open options on key down', async () => {
        let wrapper
        const onKeyDownSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <Multiselect
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                    onKeyDown={onKeyDownSpy}
                />,
            )
        })

        const { container } = wrapper

        const select = container.querySelector('select')

        expect(onKeyDownSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.keyDown(select, { key: 'Enter' })
        })

        expect(onKeyDownSpy).toHaveBeenCalledTimes(1)
    })

    it('read only mousedown desktop', async () => {
        let wrapper: RenderResult
        const onFocusSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Multiselect
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' },
                        ]}
                        onFocus={onFocusSpy}
                    />
                </ThemeProvider>,
            )
        })

        const { container } = wrapper

        const select = container.querySelector('select')

        expect(onFocusSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.mouseDown(select)
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(1)
    })
})
