import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import TextArea from './TextArea'

describe('TextArea Tests', () => {
    it('renders', () => {
        const { getByDisplayValue } = render(
            <TextArea defaultValue="text" />
        )

        const textArea = getByDisplayValue('text')

        expect(textArea).toBeInTheDocument()
    })

    describe('handleChange', () => {
        it('triggers `onChange` when change event occurs', () => {
            const onChangeSpy = jest.fn(event => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextArea defaultValue="text" onChange={onChangeSpy} />
            )

            const textArea = getByDisplayValue('text')

            expect(onChangeSpy).not.toHaveBeenCalled()

            fireEvent.change(textArea, {
                target: {
                    value: 'changed'
                }
            })

            expect(onChangeSpy).toHaveBeenCalled()
        })

        it('triggers error when length is greater then max', () => {
            const onChangeSpy = jest.fn(event => event.defaultPrevented)
            const { getByDisplayValue } = render(
                <TextArea defaultValue="text" max={5} onChange={onChangeSpy} />
            )

            const textArea = getByDisplayValue('text')

            /** input value greater then max */
            fireEvent.change(textArea, {
                target: {
                    value: 'changed'
                }
            })
            /** should add data-invalid attribute */
            expect(textArea.attributes['data-invalid'].value).toBeTruthy()

            /** change input to a valid text length */
            fireEvent.change(textArea, {
                target: {
                    value: 'valid'
                }
            })
            /** should remove the data-invalid attribute */
            expect(textArea.attributes['data-invalid']).toBeUndefined()
        })
    })
})
