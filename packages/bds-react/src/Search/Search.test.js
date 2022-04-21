import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Search from './Search'

describe('Search Tests', () => {
    it('renders', () => {
        const { getByDisplayValue } = render(
            <Search defaultValue="search" />
        )

        const textinput = getByDisplayValue('search')

        expect(textinput).toBeInTheDocument()
    })

    describe('prop: onSearchClick', () => {
        it('triggers `onSearchClick` when search icon is clicked', () => {
            const onSearchSpy = jest.fn(event => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <Search defaultValue="search" onSearchClick={onSearchSpy} />
            )

            const textInput = getByDisplayValue('search')
            const iconBefore = textInput.nextSibling.firstChild
            const iconAfter = textInput.nextSibling.lastChild

            expect(onSearchSpy).not.toHaveBeenCalled()

            fireEvent.click(iconBefore)

            expect(onSearchSpy).toHaveBeenCalled()
        })
    })
})
