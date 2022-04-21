import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Stepper from './Stepper'

describe('Stepper Snapshots', () => {
    test('Stepper default snapshot', () => {
        const { asFragment } = render(
            <Stepper />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Checkbox light theme snapshot', () => {
        const { asFragment } = render(
            <ThemeProvider theme="light">
                <Stepper />
            </ThemeProvider>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Checkbox dark theme snapshot', () => {
        const { asFragment } = render(
            <ThemeProvider theme="dark">
                <Stepper />
            </ThemeProvider>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper disabled snapshot', () => {
        const { asFragment } = render(
            <Stepper disabled />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper className snapshot', () => {
        const { asFragment } = render(
            <Stepper className="test-class" />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper wrapperProps snapshot', () => {
        const { asFragment } = render(
            <Stepper
                wrapperProps={{
                    style: {
                        opacity: '0'
                    }
                }}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper DOM id, name, value snapshot', () => {
        const { asFragment } = render(
            <Stepper
                id="test-id"
                name="test-name"
                value={0}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper min, max, step, defaultValue snapshot', () => {
        const { asFragment } = render(
            <Stepper
                min={3}
                max={9}
                step={3}
                defaultValue={6}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper a11y iconDescription snapshot', () => {
        const { asFragment } = render(
            <Stepper
                iconDescription="Test Description"
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Stepper a11y labels snapshot', () => {
        const { asFragment } = render(
            <Stepper 
                incrementNumLabel="Increment Test Description"
                decrementNumLabel="Decrement Test Description"
                ariaLabel="Stepper Test Description"
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
