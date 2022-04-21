import * as React from 'react'
import { render, fireEvent } from '../../test-utils'

import ListOption from '../ListOption'

import List from './ListSelector'

describe('List Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <List
                data-testid="list"
            >
                <ListOption>Item 1</ListOption>
                <ListOption>Item 2</ListOption>
                <ListOption>Item 3</ListOption>
                <ListOption>Item 4</ListOption>
            </List>
        )

        const list = getByTestId('list')

        expect(list).toBeInTheDocument()
    })

    it('updates selected on change', () => {
        const { getAllByRole } = render(
            <List
                data-testid="list"
            >
                <ListOption>Item 1</ListOption>
                <ListOption>Item 2</ListOption>
                <ListOption>Item 3</ListOption>
                <ListOption>Item 4</ListOption>
            </List>
        )

        // const list = getByTestId('list')
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

    it('triggers `onChange` when changed', () => {
        const onChangeSpy = jest.fn()
        const { getByTestId, getAllByRole } = render(
            <List
                data-testid="list"
                onChange={onChangeSpy}
            >
                <ListOption value="val1">Item 1</ListOption>
                <ListOption value="val2">Item 2</ListOption>
                <ListOption value="val3">Item 3</ListOption>
                <ListOption value="val4">Item 4</ListOption>
            </List>
        )

        const list = getByTestId('list')
        const [item0, item1, item2, item3] = getAllByRole('button')

        expect(onChangeSpy).not.toHaveBeenCalled()

        fireEvent.click(item1)

        expect(onChangeSpy).toHaveBeenCalledTimes(1)
        // expect(onChangeSpy).toHaveBeenCalledWith({
        //     ...onChangeSpy.mock.calls[0][0],
        //     target: item1
        // }, {
        //     container: list,
        //     disabled: false,
        //     index: 1,
        //     value: 'val2',
        //     item: item1,
        //     label: 'Item 2',
        //     text: 'Item 2'
        // })
    })

    it('triggers `onChange` when `Enter` key is used', () => {
        const onChangeSpy = jest.fn()
        const { getByTestId, getAllByRole } = render(
            <List
                data-testid="list"
                onChange={onChangeSpy}
            >
                <ListOption value="val1">Item 1</ListOption>
                <ListOption value="val2">Item 2</ListOption>
                <ListOption value="val3">Item 3</ListOption>
                <ListOption value="val4">Item 4</ListOption>
            </List>
        )

        const list = getByTestId('list')
        const [item0, item1, item2, item3] = getAllByRole('button')

        expect(onChangeSpy).not.toHaveBeenCalled()

        fireEvent.focus(item2)

        fireEvent.click(item2)
        fireEvent.keyDown(item2, {
            key: 'Enter'
        })

        expect(onChangeSpy).toHaveBeenCalledTimes(1)
        // expect(onChangeSpy).toHaveBeenCalledWith({
        //     ...onChangeSpy.mock.calls[0][0],
        //     target: item2
        // }, {
        //     container: list,
        //     disabled: false,
        //     index: 2,
        //     value: 'val3',
        //     item: item2,
        //     label: 'Item 3',
        //     text: 'Item 3'
        // })
    })
})
