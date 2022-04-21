import * as React from 'react'
import { render } from '../../test-utils'
import Checkbox from '../Checkbox'
import FormControlLabel from './FormControlLabel'

describe('FormControl Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <FormControlLabel
                label="Label"
                control={<Checkbox />}
            />
        )

        const label = getByLabelText('Label', { selector: 'input' })

        expect(label).toBeInTheDocument()
    })
})
