import * as React from 'react'
import { render, act } from '../../test-utils'

import { ThemeProvider } from '../ThemeProvider'

import Autocomplete from './Autocomplete'
import Search from '../Search'
import ListSelector from '../ListSelector'


const DefaultOptions = () => (
    <ListSelector
        options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
            { label: 'Option 4', value: '4' }
        ]}
    />
)

describe('Autocomplete Snapshots', () => {
    test('render correctly', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <Autocomplete
                        open
                        data-testid="autocomplete"
                        options={<DefaultOptions />}
                        renderInput={<Search />}
                    />
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
