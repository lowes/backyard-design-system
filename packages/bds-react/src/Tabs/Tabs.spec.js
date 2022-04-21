import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Tabs from './Tabs'
import Tab from './Tab'
import Typography from '../Typography'

describe('Tabs Snapshots', () => {
    test('Tabs default snapshot', () => {
        const { asFragment } = render(
            <Tabs>
                <Tab id='tab-1' label='Tab one'>
                    <Typography>This is tab one's content.</Typography>
                </Tab>
            </Tabs>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Tabs in different themes', () => {
        const themes = ['light', 'dark']

        themes.forEach(theme => {
            const { asFragment } = render(
                <Tabs>
                    <Tab id='tab-1' label='Tab one'>
                        <Typography>This is tab one's content</Typography>
                    </Tab>
                    <Tab id='tab-2' label='Tab two'>
                        <Typography>This is tab two's content</Typography>
                    </Tab>
                    <Tab id='tab-3' label='Tab three'>
                        <Typography>This is tab three's content</Typography>
                    </Tab>
                </Tabs>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})