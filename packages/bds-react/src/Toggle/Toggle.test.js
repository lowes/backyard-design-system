import * as React from 'react'
import { render, act, fireEvent } from '../../test-utils'

import { Toggle, ToggleButton } from '../Toggle'
import { toggleReducer } from './hooks/useToggleReducer'

describe('Toggle Tests', () => {
    it('renders', () => {
        const { getByTestId, queryAllByRole } = render(
            <Toggle data-testid="toggle">
                <ToggleButton>0</ToggleButton>
                <ToggleButton>1</ToggleButton>
                <ToggleButton>2</ToggleButton>
            </Toggle>,
        )

        const toggle = getByTestId('toggle')

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[1])
        fireEvent.click(buttons[1])

        expect(toggle).toBeInTheDocument()
    })

    test('select and unselect multiple button', async () => {
        let wrapper

        const onClickSpy = jest.fn()
        const onChangeSpy = jest.fn()
        const onSelectSpy = jest.fn()
        const onDeselectSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Toggle onChange={onChangeSpy}>
                    <ToggleButton
                        id="0"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                        value="0"
                    >
                        0
                    </ToggleButton>
                    <ToggleButton
                        id="1"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                        value="1"
                    >
                        1
                    </ToggleButton>
                    <ToggleButton id="2" value="2">
                        2
                    </ToggleButton>
                </Toggle>,
            )
        })

        const { queryAllByRole } = wrapper

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[1])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[0][0], ['1'])
        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[0][0], ['1'])
        expect(onSelectSpy).toHaveBeenCalledWith(onSelectSpy.mock.calls[0][0], '1')

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[1][0], ['1', '0'])
        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[1][0], ['1', '0'])
        expect(onSelectSpy).toHaveBeenCalledWith(onSelectSpy.mock.calls[1][0], '0')

        fireEvent.click(buttons[1])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[2][0], ['0'])
        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[2][0], ['0'])
        expect(onDeselectSpy).toHaveBeenCalledWith(onDeselectSpy.mock.calls[0][0], '1')

        fireEvent.click(buttons[2])
        fireEvent.click(buttons[2])
    })

    test('select and unselect exclusive button', async () => {
        let wrapper

        const onClickSpy = jest.fn()
        const onChangeSpy = jest.fn()
        const onSelectSpy = jest.fn()
        const onDeselectSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Toggle exclusive defaultValue="1" onChange={onChangeSpy}>
                    <ToggleButton
                        id="0"
                        value="0"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        0
                    </ToggleButton>
                    <ToggleButton
                        id="1"
                        value="1"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        1
                    </ToggleButton>
                    <ToggleButton id="2" value="2">
                        2
                    </ToggleButton>
                </Toggle>,
            )
        })

        const { queryAllByRole } = wrapper

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[0][0], '0')
        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[0][0], '0')
        expect(onSelectSpy).toHaveBeenCalledWith(onSelectSpy.mock.calls[0][0], '0')
        expect(onDeselectSpy).toHaveBeenCalledWith(onDeselectSpy.mock.calls[0][0], '1')

        fireEvent.click(buttons[2])
        fireEvent.click(buttons[2])
    })

    test('select and unselect exclusive enforce selected button', async () => {
        let wrapper

        const onClickSpy = jest.fn()
        const onChangeSpy = jest.fn()
        const onSelectSpy = jest.fn()
        const onDeselectSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Toggle exclusive enforceSelected defaultValue="0" onChange={onChangeSpy}>
                    <ToggleButton
                        id="0"
                        vale="0"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        0
                    </ToggleButton>
                    <ToggleButton
                        id="1"
                        value="1"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        1
                    </ToggleButton>
                    <ToggleButton id="2" value="2">
                        2
                    </ToggleButton>
                </Toggle>,
            )
        })

        const { queryAllByRole } = wrapper

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[0][0], '0')
        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[0][0], '0')
        expect(onSelectSpy).toHaveBeenCalledWith(onSelectSpy.mock.calls[0][0], '0')

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalled()

        expect(onDeselectSpy).not.toHaveBeenCalled()
    })

    test('select and unselect multiple enforce selected button', async () => {
        let wrapper

        const onClickSpy = jest.fn()
        const onChangeSpy = jest.fn()
        const onSelectSpy = jest.fn()
        const onDeselectSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <Toggle enforceSelected defaultValue={['0']} onChange={onChangeSpy}>
                    <ToggleButton
                        id="0"
                        value="0"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        0
                    </ToggleButton>
                    <ToggleButton
                        id="1"
                        value="1"
                        onClick={onClickSpy}
                        onSelect={onSelectSpy}
                        onDeselect={onDeselectSpy}
                    >
                        1
                    </ToggleButton>
                    <ToggleButton id="2" value="2">
                        2
                    </ToggleButton>
                </Toggle>,
            )
        })

        const { queryAllByRole } = wrapper

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalledWith(onClickSpy.mock.calls[0][0], ['0'])

        fireEvent.click(buttons[0])

        expect(onClickSpy).toHaveBeenCalled()

        expect(onDeselectSpy).not.toHaveBeenCalled()
    })

    test('update controlled value', async () => {
        let wrapper

        let onChangeSpy = jest.fn()

        const ControlledValue = () => {
            const value = ['1', '2']

            return (
                <Toggle onChange={onChangeSpy} value={value}>
                    <ToggleButton id="0" value="0">
                        0
                    </ToggleButton>
                    <ToggleButton id="1" value="1">
                        1
                    </ToggleButton>
                    <ToggleButton id="2" value="2">
                        2
                    </ToggleButton>
                </Toggle>
            )
        }

        await act(async () => {
            wrapper = render(
                <div>
                    <ControlledValue />
                </div>,
            )
        })

        const { queryAllByRole } = wrapper

        const buttons = queryAllByRole('button')

        fireEvent.click(buttons[0])

        expect(onChangeSpy).toHaveBeenCalledWith(onChangeSpy.mock.calls[0][0], ['1', '2', '0'])
    })

    test('toggle reducer default action', () => {
        expect(
            toggleReducer(
                '0',
                { type: 'default', value: '1' },
                { exclusive: true, enforceSelected: false },
            ),
        ).toBe('0')
    })
})
