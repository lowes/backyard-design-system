import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import TextInput from './TextInput'

describe('TextInput Tests', () => {
    it('renders', () => {
        const { getByDisplayValue } = render(<TextInput defaultValue="text" />)

        const textinput = getByDisplayValue('text')

        expect(textinput).toBeInTheDocument()
    })

    describe('prop: onChange', () => {
        it('doesnt trigger `onChange` when not defined', () => {
            const onChangeSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(<TextInput defaultValue="text" />)

            const textInput = getByDisplayValue('text')

            fireEvent.change(textInput, {
                target: {
                    value: 'changed',
                },
            })

            expect(onChangeSpy).not.toHaveBeenCalled()
        })

        it('triggers `onChange` when change event occurs', () => {
            const onChangeSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextInput defaultValue="text" onChange={onChangeSpy} />,
            )

            const textInput = getByDisplayValue('text')

            expect(onChangeSpy).not.toHaveBeenCalled()

            fireEvent.change(textInput, {
                target: {
                    value: 'changed',
                },
            })

            expect(onChangeSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onFocus', () => {
        it('doesnt trigger `onFocus` when not defined', () => {
            const onFocusSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(<TextInput defaultValue="text" />)

            const textInput = getByDisplayValue('text')

            fireEvent.focus(textInput)

            expect(onFocusSpy).not.toHaveBeenCalled()
        })

        it('triggers `onFocus` when focus event occurs', () => {
            const onFocusSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextInput defaultValue="text" onFocus={onFocusSpy} />,
            )

            const textInput = getByDisplayValue('text')

            expect(onFocusSpy).not.toHaveBeenCalled()

            fireEvent.focus(textInput)

            expect(onFocusSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onBlur', () => {
        it('doesnt trigger `onBlur` when not defined', () => {
            const onBlurSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(<TextInput defaultValue="text" />)

            const textInput = getByDisplayValue('text')

            fireEvent.blur(textInput)

            expect(onBlurSpy).not.toHaveBeenCalled()
        })

        it('triggers `onBlur` when blur event occurs', () => {
            const onBlurSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextInput defaultValue="text" onBlur={onBlurSpy} />,
            )

            const textInput = getByDisplayValue('text')

            fireEvent.focus(textInput)

            expect(onBlurSpy).not.toHaveBeenCalled()

            fireEvent.blur(textInput)

            expect(onBlurSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onClick', () => {
        it('doesnt trigger `onClick` when not defined', () => {
            const onClickSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(<TextInput defaultValue="text" />)

            const textInput = getByDisplayValue('text')

            fireEvent.click(textInput)

            expect(onClickSpy).not.toHaveBeenCalled()
        })

        it('triggers `onClick` when click event occurs', () => {
            const onClickSpy = jest.fn((event) => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextInput defaultValue="text" onClick={onClickSpy} />,
            )

            const textInput = getByDisplayValue('text')

            expect(onClickSpy).not.toHaveBeenCalled()

            fireEvent.click(textInput)

            expect(onClickSpy).toHaveBeenCalled()
        })
    })
})
