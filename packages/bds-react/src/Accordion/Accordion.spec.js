import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Accordion from './Accordion'

describe('Accordion Snapshots', () => {
    test('Accordion default snapshot', () => {
        const { asFragment } = render(
            <Accordion
                title='Title'>
            </Accordion>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach(theme => {
            test(`Accordion ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Accordion
                                title='Title'>
                                Children
                            </Accordion>
                        </React.Fragment>
                    </ThemeProvider>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('props: defaultOpen', () => {
        const defaultOpens = [true, false]

        defaultOpens.forEach(defaultOpenValue => {
            test(`Accordion ${defaultOpenValue} defaultOpen snapshot`, () => {
                const { asFragment } = render(
                    <Accordion
                        title='Title'
                        defaultOpen={defaultOpenValue}>
                        Children
                    </Accordion>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('props: openIcon', () => {
        const openIcons = ['triangle', 'plus']

        openIcons.forEach(openIcon => {
            test(`Accordion ${openIcon} variant open icon snapshot`, () => {
                const { asFragment } = render(
                    <Accordion
                        title='Title'
                        variant={openIcon}>
                        Children
                    </Accordion>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('props: closeIcon', () => {
        const closeIcons = ['triangle', 'plus']

        closeIcons.forEach(closeIcon => {
            test(`Accordion ${closeIcon} variant closed icon snapshot`, () => {
                const { asFragment } = render(
                    <Accordion
                        title='Title'
                        closeIcon={closeIcon}>
                        Children
                    </Accordion>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['large', 'medium', 'small']

        sizes.forEach(size => {
            test(`Accordion ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Accordion
                        title='Title'
                        size={size}>
                        Children
                    </Accordion>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: subtitle', () => {
        test(`Accordion subtitle snapshot`, () => {
            const { asFragment } = render(
                <Accordion
                    title='Title'
                    subtitle='Subtitle'
                    size='large'>
                    Children
                </Accordion>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})