import * as React from 'react'
import { render, Simulate, fireEvent, act } from '../../test-utils'

import Autocomplete from './Autocomplete'
import Search from '../Search'
import ListSelector from '../ListSelector'
import ThemeProvider from '../ThemeProvider'

describe('Autocomplete Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Autocomplete
                data-testid='autocomplete-test'
                renderInput={<Search />}
                options={<ListSelector
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' }
                    ]}
                />}
            />
        )

        const autocomplete = getByTestId('autocomplete-test')

        expect(autocomplete).toBeInTheDocument()
    })

    it('triggers `onChange`', async () => {
        const onChangeSpy = jest.fn()
        let wrapper

        await act(async () => {
            wrapper = render(
                <Autocomplete
                    renderInput={<Search />}
                    onChange={onChangeSpy}
                    options={<ListSelector
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                    />}
                />
            )
        })

        const { container } = wrapper
        const search = container.querySelector('.input--search')

        expect(onChangeSpy).not.toHaveBeenCalled()

        Simulate.change(search, { target: { value: 'kobalt' } })

        expect(onChangeSpy).toHaveBeenCalled()
    })

    it('open options on key down', async () => {
        let wrapper
        const onKeyDownSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <Autocomplete
                    data-testid='autocomplete-test'
                    renderInput={<Search />}
                    options={<ListSelector
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                    />}
                    onKeyDown={onKeyDownSpy}
                />
            )
        })

        const { container } = wrapper

        const input = container.querySelector('input')

        expect(onKeyDownSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.keyDown(input, { key: 'ArrowDown' })
        })

        expect(onKeyDownSpy).toHaveBeenCalledTimes(1)
    })

    it('focus in and focus out', async () => {
        let wrapper
        const onFocusSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <React.Fragment>
                        <Autocomplete
                            delayOpen={0}
                            delayClose={0}
                            data-testid='autocomplete-test'
                            renderInput={<Search className="main-search" />}
                            options={<ListSelector
                                options={[
                                    { label: 'Option 1', value: '1' },
                                    { label: 'Option 2', value: '2' },
                                    { label: 'Option 3', value: '3' },
                                    { label: 'Option 4', value: '4' }
                                ]}
                            />}
                            onFocus={onFocusSpy}
                        />
                        <Search className="other-search" value="" />
                    </React.Fragment>
                </ThemeProvider>
            )
        })

        const { container } = wrapper

        const input = container.querySelector('.main-search')
        const other = container.querySelector('.other-search')

        expect(onFocusSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.click(input)
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(0)

        await act(async () => {
            fireEvent.focusOut(input, {
                relatedTarget: other
            })
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(0)
    })
})
