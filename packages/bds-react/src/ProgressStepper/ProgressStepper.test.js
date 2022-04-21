import * as React from 'react'

import { render, fireEvent } from '../../test-utils'

import ProgressStepper from './ProgressStepper'
import ProgressStep from './ProgressStep'

describe('ProgressStepper Tests', () => {
    it('renders structurally', () => {
        const { getAllByRole } = render(
            <ProgressStepper
                steps={[{
                    title: 'Step 1'
                }, {
                    title: 'Step 2'
                }]}
            />
        )

        const buttons = getAllByRole('button')

        expect(buttons[0]).toBeInTheDocument()
        expect(buttons[1]).toBeInTheDocument()
    })

    it('renders declaratively', () => {
        const { getAllByRole } = render(
            <ProgressStepper
                step={1}
            >
                <ProgressStep
                    title="Step 1"
                />
                <ProgressStep
                    title="Step 2"
                />
            </ProgressStepper>
        )

        const buttons = getAllByRole('button')

        expect(buttons[0]).toBeInTheDocument()
        expect(buttons[1]).toBeInTheDocument()
    })

    it('updates `ProgressStep` when `step` prop changes', () => {
        const ProgressStepExample = () => {
            const [step, setStep] = React.useState(0)

            return (
                <ProgressStepper
                    step={step}
                >
                    <ProgressStep
                        title="Step 1"
                        onClick={() => setStep(0)}
                    />
                    <ProgressStep
                        title="Step 2"
                        onClick={() => setStep(1)}
                    />
                </ProgressStepper>
            )
        }
        const { getAllByRole } = render(
            <ProgressStepExample />
        )

        const buttons = getAllByRole('button')

        expect(buttons[0].parentNode.classList).toContain('active')
        expect(buttons[1].parentNode.classList).not.toContain('active')

        fireEvent.click(buttons[1])

        expect(buttons[0].parentNode.classList).not.toContain('active')
        expect(buttons[1].parentNode.classList).toContain('active')
    })
})
