import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Switch from './Switch'
import FormControlLabel from '../FormControlLabel'

describe('Switch Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <Switch />
        )

        const checkbox = getByRole('checkbox')

        expect(checkbox).toBeInTheDocument()
    })

    it('updates checked on change', () => {
        const { getByRole } = render(
            <Switch />
        )

        const checkbox = getByRole('checkbox')

        expect(checkbox.checked).toEqual(false)

        fireEvent.click(checkbox)

        expect(checkbox.checked).toEqual(true)
    })

    describe('with FormControlLabel', () => {
        describe('enabled', () => {
            it('should not have disabled class', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Switch />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(false)
                expect(checkbox.hasAttribute('disabled')).toBe(false)
            })

            it('should override from control\'s disabled prop if not defined', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Switch disabled />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(true)
                expect(checkbox.hasAttribute('disabled')).toBe(true)
            })

            it('should override disabled prop if defined', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled={false}
                        label="Label"
                        control={<Switch disabled />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(true)
                expect(checkbox.hasAttribute('disabled')).toBe(true)
            })
        })

        describe('disabled', () => {
            it('should have disabled class', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled
                        label="Label"
                        control={<Switch />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(true)
                expect(checkbox.hasAttribute('disabled')).toBe(true)
            })

            it('should override disabled prop', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        disabled
                        label="Label"
                        control={<Switch disabled={false} />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(true)
                expect(checkbox.hasAttribute('disabled')).toBe(true)
            })
        })
    })
})
