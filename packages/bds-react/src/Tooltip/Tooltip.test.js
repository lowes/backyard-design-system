import * as React from 'react'
import { LocationOutlined } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import Tooltip from './Tooltip'

describe('Tooltip Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Tooltip
                title="Title"
                icon={<LocationOutlined />}
            >
                Subtitle
            </Tooltip>
        )

        const title = getByText('Title')
        const subtitle = getByText('Subtitle')

        expect(title).toBeInTheDocument()
        expect(subtitle).toBeInTheDocument()
    })

    describe('prop: invisible', () => {
        it('should be visible by default', () => {
            const { getByText } = render(
                <Tooltip>
                    Subtitle
                </Tooltip>
            )

            const subtitle = getByText('Subtitle')

            expect(subtitle).toBeVisible()
        })

        // it('should not be visible if flagged', () => {
        //     const { getByText } = render(
        //         <Tooltip
        //             invisible
        //         >
        //             Subtitle
        //         </Tooltip>
        //     )

        //     const subtitle = getByText('Subtitle')

        //     expect(subtitle).not.toBeVisible()
        // })
    })
})
