import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import UnorderedList from './UnorderedList'
import ListItem from '../ListItem'

describe('UnorderedList Snapshots', () => {
    test('UnorderdList default snapshot', () => {
        const { asFragment } = render(
            <UnorderedList density='normal'>
                <ListItem>List item</ListItem>
            </UnorderedList>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']
        const densities = ['condensed', 'normal', 'comfort']

        themes.forEach((theme) => {
            densities.forEach((density) => {
                test(`UnorderedList normal spacing ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <UnorderedList density={density}>
                                    <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                    <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                    <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                        <UnorderedList nested>
                                            <ListItem>Look at me, I'm nested and a slightly different color.</ListItem>
                                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                        </UnorderedList>
                                    </ListItem>
                                    <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                                </UnorderedList>
                            </React.Fragment>
                        </ThemeProvider>
                    )
                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })
    })
})