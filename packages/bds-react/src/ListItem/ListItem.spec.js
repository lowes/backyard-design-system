import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import ListItem from '../ListItem'

describe('ListItem Snapshots', () => {
    test('ListItem default snapshot', () => {
        const { asFragment } = render(
            <ListItem>List item</ListItem>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`ListItem ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <ListItem>Item one</ListItem>
                        </React.Fragment>
                    </ThemeProvider>
                )
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})