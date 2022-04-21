import * as React from 'react'
import { render } from '../../test-utils'
import FormControl from '../FormControl'
import FormGroup from '../FormGroup'
import Checkbox from '../Checkbox'
import FormHelperText from '../FormHelperText'
import FormHeading from './FormHeading'

describe('FormControl Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <FormControl>
                <FormHeading>Heading</FormHeading>
                <FormGroup>
                    <Checkbox value="0" />
                    <Checkbox value="1" />
                    <Checkbox value="2" />
                </FormGroup>
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        const heading = getByText('Heading')

        expect(heading).toBeInTheDocument()
    })
})
