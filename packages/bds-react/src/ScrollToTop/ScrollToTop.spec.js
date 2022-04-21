import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import ScrollToTop from './ScrollToTop'

describe('ScrollToTop Snapshots', () => {
    let container1

    beforeAll(() => {
        container1 = document.createElement('div')
        container1.style.paddingRight = '20px'

        Object.defineProperty(document.body, 'scrollHeight', {
            value: 100,
            writable: false,
        })
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 50,
        })

        document.body.appendChild(container1)
    })

    afterAll(() => {
        document.body.removeChild(container1)
    })

    test('default snapshot', () => {
        const { asFragment } = render(<ScrollToTop disablePortal />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('props', () => {
        test('rightMargin snapshot', () => {
            const { asFragment } = render(<ScrollToTop disablePortal rightMargin="size_1" />)

            expect(asFragment()).toMatchSnapshot()
        })

        test('bottomMargin snapshot', () => {
            const { asFragment } = render(<ScrollToTop disablePortal bottomMargin="size_1" />)

            expect(asFragment()).toMatchSnapshot()
        })

        test('hide snapshot', () => {
            const { asFragment } = render(<ScrollToTop disablePortal hide />)

            expect(asFragment()).toMatchSnapshot()
        })

        test('noAnimation snapshot', () => {
            const { asFragment } = render(<ScrollToTop disablePortal noAnimation />)

            expect(asFragment()).toMatchSnapshot()
        })

        test('showAt snapshot', () => {
            const { asFragment } = render(<ScrollToTop disablePortal showAt={0} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`ScrollToTop ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <ScrollToTop disablePortal />
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('ScrollToTop DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <ScrollToTop disablePortal id="id" className="classname" />,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
