import * as React from 'react'
import { render, fireEvent } from '../../test-utils'

import ButtonGroup from './ButtonGroup'
import IconButton from '../IconButton'
import Plus from '@lowes-tech/bds-icons/Plus'

describe('ButtonGroup', () => {
    it('should render', async () => {
        const { container } = render(
            <ButtonGroup>
                <IconButton>
                    <Plus />
                </IconButton>
            </ButtonGroup>
        )

        const buttonGroup = container.querySelector('.button-group')
        const iconButton = container.querySelector('.button')
    
        expect(buttonGroup).toBeInTheDocument()
        expect(iconButton).toBeInTheDocument()
    })

    it('should have a selected', async () => {
        const { container } = render(
            <ButtonGroup>
                <IconButton>
                    <Plus />
                </IconButton>
                <IconButton>
                    <Plus />
                </IconButton>
            </ButtonGroup>
        )

        const iconButton = container.querySelector('.icon-button:first-child')

        fireEvent.click(iconButton)

        expect(iconButton).toBeInTheDocument()
    })
})