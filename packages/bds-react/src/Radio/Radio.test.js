import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Radio from './Radio'
import FormControlLabel from '../FormControlLabel'

describe('Radio Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <Radio />
        )

        const radio = getByRole('radio')

        expect(radio).toBeInTheDocument()
    })

    it('updates checked on change', () => {
        const { getByRole } = render(
            <Radio />
        )

        const radio = getByRole('radio')

        expect(radio.checked).toEqual(false)

        fireEvent.click(radio)

        expect(radio.checked).toEqual(true)
    })

    describe('with FormControlLabel', () => {
        describe('enabled', () => {
            it('should not have disabled class', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Radio />}
                    />
                )

                const radio = getByRole('radio')

                expect(radio.classList.contains('disabled')).toBe(false)
                expect(radio.hasAttribute('disabled')).toBe(false)
            })

            it('should override from control\'s disabled prop if not defined', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Radio disabled />}
                    />
                )

                const radio = getByRole('radio')

                expect(radio.classList.contains('disabled')).toBe(true)
                expect(radio.hasAttribute('disabled')).toBe(true)
            })

            it('should override disabled prop if defined', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled={false}
                        label="Label"
                        control={<Radio disabled />}
                    />
                )

                const radio = getByRole('radio')

                expect(radio.classList.contains('disabled')).toBe(true)
                expect(radio.hasAttribute('disabled')).toBe(true)
            })
        })

        describe('disabled', () => {
            it('should have disabled class', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled
                        label="Label"
                        control={<Radio />}
                    />
                )

                const radio = getByRole('radio')

                expect(radio.classList.contains('disabled')).toBe(true)
                expect(radio.hasAttribute('disabled')).toBe(true)
            })

            it('should override disabled prop', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled
                        label="Label"
                        control={<Radio disabled={false} />}
                    />
                )

                const radio = getByRole('radio')

                expect(radio.classList.contains('disabled')).toBe(true)
                expect(radio.hasAttribute('disabled')).toBe(true)
            })
        })
    })
})
