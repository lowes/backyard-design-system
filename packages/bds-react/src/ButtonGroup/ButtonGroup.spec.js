import * as React from 'react'
import { render } from '../../test-utils'
import ButtonGroup from './ButtonGroup'
import IconButton from '../IconButton'
import Plus from '@lowes-tech/bds-icons/Plus'

describe('ButtonGroup Snapshots', () => {
    test('ButtonGroup default snapshot', () => {
        const { asFragment } = render(
            <ButtonGroup>
                <IconButton>
                    <Plus />
                </IconButton>
            </ButtonGroup>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('ButtonGroup variants', () => {
        const variants = ['outlined', 'ghost']

        variants.forEach(variant => {
            test(`ButtonGroup variant ${variant}`, () => {
                const { asFragment } = render(
                    <ButtonGroup
                        variant={variant}
                    >
                        <IconButton>
                            <Plus />
                        </IconButton>
                    </ButtonGroup>
                )
        
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})