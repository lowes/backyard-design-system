import * as React from 'react'
import { render, mount, fireEvent, act } from '../../test-utils'
import TextField from './TextField'

describe('TextField Tests', () => {
    it('renders', () => {
        const { getByDisplayValue } = render(<TextField defaultValue="text" />)

        const textinput = getByDisplayValue('text')

        expect(textinput).toBeInTheDocument()
    })

    it('correctly uses the event.target for onChange handler', () => {
        const testState = {
            field: 'one',
        }

        const onChangeSpy = jest.fn((event) => (testState[event.target.name] = event.target.value))

        const { getByLabelText } = render(
            <TextField label="Field" name="field" value={testState.field} onChange={onChangeSpy} />,
        )

        const input = getByLabelText('Field')

        expect(onChangeSpy).not.toHaveBeenCalled()
        expect(testState.field).toBe('one')
        expect(input).toHaveValue('one')

        act(() => {
            fireEvent.change(input, {
                target: {
                    name: 'field',
                    value: 'two',
                },
            })
        })

        expect(onChangeSpy).toHaveBeenCalled()
        expect(testState.field).toBe('two')
        expect(input).toHaveValue('two')
    })

    it('simulates change event correctly with enzyme', () => {
        const testState = {
            field: 'one',
        }

        const onChangeSpy = jest.fn((event) => (testState[event.target.name] = event.target.value))

        const wrapper = mount(
            <TextField name="field" value={testState.field} onChange={onChangeSpy} />,
        )

        const getInput = () => wrapper.find('input')

        expect(onChangeSpy).not.toHaveBeenCalled()
        expect(testState.field).toBe('one')
        expect(getInput().instance().value).toBe('one')

        act(() => {
            getInput()
                .props()
                .onChange({
                    target: {
                        name: 'field',
                        value: 'two',
                    },
                })
        })

        expect(onChangeSpy).toHaveBeenCalled()
        expect(testState.field).toBe('two')
        expect(getInput().instance().value).toBe('two')
    })
})
