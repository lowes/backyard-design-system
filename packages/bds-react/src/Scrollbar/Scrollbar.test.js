import * as React from 'react'
import { render } from '../../test-utils'
import Scrollbar from './Scrollbar'

describe('Scrollbar Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Scrollbar data-testid="scrollbar" id="test">
                Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger rump
                alcatra capicola chicken pork chop. Filet mignon tenderloin drumstick burgdoggen
                swine shoulder picanha meatball ham venison chislic landjaeger andouille beef ribs
                jerky. Strip steak kevin sirloin cow picanha pork loin jowl chuck short loin
                shoulder sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck ribeye.
                Kevin filet mignon pastrami turducken. Spare ribs pastrami chicken, meatball rump
                ball tip bacon kevin pork belly shoulder venison capicola cow pig ground round.
                Shank beef turducken, leberkas chuck tri-tip hamburger pork ham spare ribs kielbasa.
            </Scrollbar>,
        )

        const scrollbar = getByTestId('scrollbar')

        expect(scrollbar).toBeInTheDocument()
    })
})
