import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import OrderedList from './OrderedList'
import ListItem from '../ListItem'

describe('OrderedList Snapshots', () => {
    test('OrderedList default snapshot', () => {
        const { asFragment } = render(
            <OrderedList density='normal'>
                <ListItem>List item</ListItem>
            </OrderedList>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']
        const densities = ['condensed', 'normal', 'comfort']
        const types = ['decimal', 'lower-latin', 'lower-roman']

        themes.forEach((theme) => {
            densities.forEach((density) => {
                types.forEach((type) => {
                    test(`OrderedList normal spacing ${theme} theme snapshot`, () => {
                        const { asFragment } = render(
                            <ThemeProvider theme={theme}>
                                <React.Fragment>
                                    <OrderedList density={density} type={type}>
                                        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                            <OrderedList nested>
                                                <ListItem>Look at me, I'm nested and a slightly different color.</ListItem>
                                                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                            </OrderedList>
                                        </ListItem>
                                        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                    </OrderedList>
                                </React.Fragment>
                            </ThemeProvider>
                        )
                        expect(asFragment()).toMatchSnapshot()
                    })
                })
            })
        })
    })
})