import * as React from 'react'

import { render, fireEvent } from '../../../test-utils'

import { StubPagination } from './StubPagination'

describe('TablePagination Tests', () => {
    it('renders', async () => {
        const { container } = render(<StubPagination length={10} />)

        const pages = container.querySelectorAll('.type--page')

        pages.forEach((page) => {
            expect(page).toBeInTheDocument()
        })
    })

    it('renders 2 pages when totalRecords is 50 and itemsPerPage is 30', () => {
        const { container } = render(<StubPagination length={50} rowsPerPageOptions={[30]} />)

        const pages = container.querySelectorAll('.type--page')

        pages.forEach((page) => {
            expect(page).toBeInTheDocument()
        })

        expect(pages.length).toEqual(5)
    })

    it('renders 2 pages when totalRecords is 47 and itemsPerPage is 30', () => {
        const { container } = render(<StubPagination length={47} rowsPerPageOptions={[30]} />)

        const pages = container.querySelectorAll('.type--page')

        pages.forEach((page) => {
            expect(pages.length).toEqual(5)
            expect(page).toBeInTheDocument()
        })
    })

    it('calls the onChange handler', () => {
        const events = {
            onChangeFn: () => {},
        }

        const eventSpy = jest.spyOn(events, 'onChangeFn') as any

        const { container } = render(<StubPagination length={50} onChange={eventSpy} />)

        const nextBtn = container.querySelector('.type--next')

        fireEvent.click(nextBtn)

        expect(eventSpy).toBeCalledTimes(1)
    })

    it('should change the number of rows to 25', () => {
        const { container, getByText } = render(<StubPagination length={50} />)

        const select = container.querySelector('.select--input')

        fireEvent.keyPress(select, {
            key: 'Down',
        })

        fireEvent.keyPress(select, {
            key: 'Down',
        })

        fireEvent.keyPress(select, {
            key: 'Enter',
        })

        const rowQuantity = getByText('25')

        expect(rowQuantity).toBeInTheDocument()
    })
})
