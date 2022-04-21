import * as React from 'react'
import { render } from '../../test-utils'
import Switch from '../Checkbox'
import FormControlLabel from '../FormControlLabel'
import FormGroup from './FormGroup'

describe('FormControl Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <FormGroup>
                <FormControlLabel
                    label="Label 1"
                    control={<Switch />}
                />
                <FormControlLabel
                    label="Label 2"
                    control={<Switch />}
                />
                <FormControlLabel
                    label="Label 3"
                    control={<Switch />}
                />
            </FormGroup>
        )

        const label1 = getByLabelText('Label 1', { selector: 'input' })
        const label2 = getByLabelText('Label 2', { selector: 'input' })
        const label3 = getByLabelText('Label 3', { selector: 'input' })

        expect(label1).toBeInTheDocument()
        expect(label2).toBeInTheDocument()
        expect(label3).toBeInTheDocument()
    })
})
