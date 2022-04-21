import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Checkbox from './Checkbox'
import FormControlLabel from '../FormControlLabel'

describe('Checkbox Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <Checkbox />
        )

        const checkbox = getByRole('checkbox')

        expect(checkbox).toBeInTheDocument()
    })

    it('updates checked on change', () => {
        const { getByRole } = render(
            <Checkbox />
        )

        const checkbox = getByRole('checkbox')

        expect(checkbox.checked).toEqual(false)

        fireEvent.click(checkbox)

        expect(checkbox.checked).toEqual(true)
    })


    it('should render with data-indeterminate === true', () => {
        const { getByRole, rerender } = render(
            <Checkbox />
        )

        const checkbox = getByRole('checkbox')

        expect(checkbox.getAttribute('data-indeterminate')).toEqual("false")

        rerender(
            <Checkbox indeterminate />
        )

        expect(checkbox.getAttribute('data-indeterminate')).toEqual("true")
    })

    describe('with FormControlLabel', () => {
        describe('enabled', () => {
            it('should not have disabled class', () => {
                const { getByRole } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Checkbox />}
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
                        control={<Checkbox disabled />}
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
                        control={<Checkbox disabled />}
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
                        control={<Checkbox />}
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
                        control={<Checkbox disabled={false} />}
                    />
                )

                const checkbox = getByRole('checkbox')

                expect(checkbox.classList.contains('disabled')).toBe(true)
                expect(checkbox.hasAttribute('disabled')).toBe(true)
            })
        })
    })
})
