import * as React from 'react'
import { render } from '../../test-utils'
import Checkbox from '../Checkbox'
import FormHeading from '../FormHeading'
import FormGroup from '../FormGroup'
import FormHelperText from '../FormHelperText'
import FormControl from './FormControl'
import FormControlLabel from '../FormControlLabel'

describe('FormControl Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <FormControl data-testid="form">
                <div />
            </FormControl>
        )

        const form = getByTestId('form')

        expect(form).toBeInTheDocument()
    })

    it('renders full', () => {
        const { getByTestId } = render(
            <FormControl data-testid="form">
                <FormHeading>Heading</FormHeading>
                <FormGroup>
                    <Checkbox value="0" />
                    <Checkbox value="1" />
                    <Checkbox value="2" />
                </FormGroup>
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        const form = getByTestId('form')

        expect(form).toBeInTheDocument()
    })

    it('renders full with child props', () => {
        const { getByTestId } = render(
            <FormControl data-testid="form">
                <FormHeading>Heading</FormHeading>
                <FormGroup state='error'
                    disabled={true}
                >
                    <FormControlLabel
                        control={<Checkbox value="0" />}
                        label="One"
                    />
                    <FormControlLabel
                        control={<Checkbox value="1" />}
                        label="One"
                    />
                    <FormControlLabel
                        control={<Checkbox value="2" />}
                        label="Two"
                    />
                </FormGroup>
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        const form = getByTestId('form')

        expect(form).toBeInTheDocument()
    })
})
