import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import ListOption from '../ListOption'

import List from './ListSelector'

describe('List Snapshots', () => {
    test('List default snapshot', () => {
        const { asFragment } = render(
            <List>
                <ListOption>Item 1</ListOption>
                <ListOption>Item 2</ListOption>
                <ListOption>Item 3</ListOption>
                <ListOption>Item 4</ListOption>
            </List>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`List ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <List>
                            <ListOption>Item 1</ListOption>
                            <ListOption>Item 2</ListOption>
                            <ListOption>Item 3</ListOption>
                            <ListOption>Item 4</ListOption>
                        </List>                        
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('List renderItem override snapshot', () => {
        const { asFragment } = render(
            <List
                className="test-class"
                renderItem={(item) => <div {...item} />}
            >
                <ListOption>Item 1</ListOption>
                <ListOption>Item 2</ListOption>
                <ListOption>Item 3</ListOption>
                <ListOption>Item 4</ListOption>
            </List>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('extra props', () => {
        test('List className snapshot', () => {
            const { asFragment } = render(
                <List 
                    className="test-class"
                >
                    <ListOption>Item 1</ListOption>
                    <ListOption>Item 2</ListOption>
                    <ListOption>Item 3</ListOption>
                    <ListOption>Item 4</ListOption>
                </List>
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('List default selected snapshot', () => {
            const { asFragment } = render(
                <List
                    className="test-class"
                    defaultSelected={1}
                >
                    <ListOption>Item 1</ListOption>
                    <ListOption>Item 2</ListOption>
                    <ListOption>Item 3</ListOption>
                    <ListOption>Item 4</ListOption>
                </List>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
