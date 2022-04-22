import * as React from 'react'
import { render, fireEvent, act } from '../../test-utils'

import { ThemeProvider } from '../ThemeProvider'

import Dropdown from './Dropdown'

describe('Dropdown Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Dropdown
                data-testid="dropdown"
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                    { label: 'Option 4', value: '4' }
                ]}
            />
        )

        const dropdown = getByTestId('dropdown')

        expect(dropdown).toBeInTheDocument()
    })

    it('updates selected on change', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Dropdown
                        open
                        disableCloseOnSelect
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                    />
                </ThemeProvider>
            )
        })

        const { getAllByRole } = wrapper

        const [item0, item1, item2, item3] = getAllByRole('button')

        expect(item0.getAttribute('data-selected')).toEqual(null)
        expect(item1.getAttribute('data-selected')).toEqual(null)
        expect(item2.getAttribute('data-selected')).toEqual(null)
        expect(item3.getAttribute('data-selected')).toEqual(null)

        fireEvent.click(item1)

        expect(item0.getAttribute('data-selected')).toEqual(null)
        expect(item1.getAttribute('data-selected')).toEqual('true')
        expect(item2.getAttribute('data-selected')).toEqual(null)
        expect(item3.getAttribute('data-selected')).toEqual(null)
    })

    it('triggers `onChange` when list changed', async () => {
        const onChangeSpy = jest.fn((event) => event.persist())
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Dropdown
                        open
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                        onChange={onChangeSpy}
                    />
                </ThemeProvider>
            )
        })

        const { getAllByRole, container } = wrapper

        const dropdown = container.querySelector('ul')

        const [item0, item1, item2, item3] = getAllByRole('button')

        expect(onChangeSpy).not.toHaveBeenCalled()

        fireEvent.click(item1)

        expect(onChangeSpy).toHaveBeenCalledTimes(1)
        expect(onChangeSpy).toHaveBeenCalledWith({
            ...onChangeSpy.mock.calls[0][0],
            target: item1
        }, {
            container: dropdown,
            disabled: false,
            index: 1,
            value: '2',
            item: item1,
            label: 'Option 2',
            text: 'Option 2'
        })
    })

    it('triggers `onChange` when select changed', async () => {
        const onChangeSpy = jest.fn((event) => event.persist())
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: true, isDesktop: false }}>
                    <Dropdown
                        open
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                        onChange={onChangeSpy}
                    />
                </ThemeProvider>
            )
        })

        const { container } = wrapper

        const select = container.querySelector('select')

        expect(onChangeSpy).not.toHaveBeenCalled()

        fireEvent.change(select, {
            target: {
                value: '2'
            }
        })

        expect(onChangeSpy).toHaveBeenCalledTimes(1)
        expect(onChangeSpy).toHaveBeenCalledWith({
            ...onChangeSpy.mock.calls[0][0],
        }, {
            disabled: false,
            index: 2,
            value: '2',
            label: 'Option 2',
            text: 'Option 2'
        })
    })

    it('hides options on mouse down', async () => {
        let wrapper
        const onMouseDownSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <Dropdown
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' }
                    ]}
                    onMouseDown={onMouseDownSpy}
                />
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
                <Dropdown
                    open
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' }
                    ]}
                    onBlur={onBlurSpy}
                />
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
                <Dropdown
                    data-testid="dropdown"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' }
                    ]}
                    onKeyDown={onKeyDownSpy}
                />
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
        let wrapper
        const onFocusSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Dropdown
                        disableCloseOnSelect
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                        onFocus={onFocusSpy}
                    />
                </ThemeProvider>
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
