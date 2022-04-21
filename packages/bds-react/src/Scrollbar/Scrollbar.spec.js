import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Scrollbar from './Scrollbar'

describe('Scrollbar Snapshots', () => {
    test('Scrollbar default snapshot', () => {
        const { asFragment } = render(
            <Scrollbar id="test">
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

        expect(asFragment()).toMatchSnapshot()
    })

    test('wrapperProps prop snapshot', () => {
        const { asFragment } = render(
            <Scrollbar id="test" wrapperProps={{ style: { backgroundColor: 'green' } }}>
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

        expect(asFragment()).toMatchSnapshot()
    })

    test('className prop snapshot', () => {
        const { asFragment } = render(
            <Scrollbar id="test" className="test-class">
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

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Scrollbar ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Scrollbar id="test">
                                Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin
                                landjaeger rump alcatra capicola chicken pork chop. Filet mignon
                                tenderloin drumstick burgdoggen swine shoulder picanha meatball ham
                                venison chislic landjaeger andouille beef ribs jerky. Strip steak
                                kevin sirloin cow picanha pork loin jowl chuck short loin shoulder
                                sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck
                                ribeye. Kevin filet mignon pastrami turducken. Spare ribs pastrami
                                chicken, meatball rump ball tip bacon kevin pork belly shoulder
                                venison capicola cow pig ground round. Shank beef turducken,
                                leberkas chuck tri-tip hamburger pork ham spare ribs kielbasa.
                            </Scrollbar>
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Scrollbar DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Scrollbar id="id" className="classname">
                    hi Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger
                    rump alcatra capicola chicken pork chop. Filet mignon tenderloin drumstick
                    burgdoggen swine shoulder picanha meatball ham venison chislic landjaeger
                    andouille beef ribs jerky. Strip steak kevin sirloin cow picanha pork loin jowl
                    chuck short loin shoulder sausage flank, brisket drumstick. Landjaeger ham pig
                    meatball chuck ribeye. Kevin filet mignon pastrami turducken. Spare ribs
                    pastrami chicken, meatball rump ball tip bacon kevin pork belly shoulder venison
                    capicola cow pig ground round. Shank beef turducken, leberkas chuck tri-tip
                    hamburger pork ham spare ribs kielbasa.
                </Scrollbar>,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
