import * as React from 'react'

import { render, fireEvent } from '../../test-utils'

import ProgressStepper from './ProgressStepper'
import ProgressStep from './ProgressStep'

describe('ProgressStep Tests', () => {
    it('renders', () => {
        const { getAllByRole } = render(
            <ProgressStepper
                step={0}
            >
                <ProgressStep
                    title="Step 1"
                />
                <ProgressStep
                    title="Step 1"
                />
            </ProgressStepper>
        )

        const buttons = getAllByRole('button')

        expect(buttons[0]).toBeInTheDocument()
        expect(buttons[1]).toBeInTheDocument()
    })

    it('triggers callbacks on update', () => {
        const onErrorSpy = jest.fn()
        const onSuccessSpy = jest.fn()
        const onSelectedSpy = jest.fn()
        const onCompleteSpy = jest.fn()

        const ProgressStepExample = () => {
            const [step, setStep] = React.useState(0)
            const [states, setStates] = React.useState([])

            return (
                <ProgressStepper
                    step={step}
                >
                    <ProgressStep
                        state={states[0]}
                        title="Step 1"
                        onError={onErrorSpy}
                        onSuccess={onSuccessSpy}
                        onClick={() => {
                            if (states[0] === 'error') {
                                setStates((states) => ({
                                    ...states,
                                    [0]: 'success'
                                }))
                            } else {
                                setStates((states) => ({
                                    ...states,
                                    [0]: 'error'
                                }))
                            }

                            setStep(0)
                        }}
                    />
                    <ProgressStep
                        state={states[1]}
                        title="Step 2"
                        onClick={() => {
                            if (step === 1) {
                                setStates((states) => ({
                                    ...states,
                                    [1]: 'complete'
                                }))
                            }

                            setStep(1)
                        }}
                        onSelected={onSelectedSpy}
                        onComplete={onCompleteSpy}
                    />
                </ProgressStepper>
            )
        }
        const { getAllByRole } = render(
            <ProgressStepExample />
        )

        const buttons = getAllByRole('button')

        expect(onErrorSpy).toHaveBeenCalledTimes(0)
        expect(onSuccessSpy).toHaveBeenCalledTimes(0)
        expect(onCompleteSpy).toHaveBeenCalledTimes(0)
        expect(onSelectedSpy).toHaveBeenCalledTimes(0)
        
        fireEvent.click(buttons[0])

        expect(onErrorSpy).toHaveBeenCalledTimes(1)
        expect(onSuccessSpy).toHaveBeenCalledTimes(0)
        expect(onCompleteSpy).toHaveBeenCalledTimes(0)
        expect(onSelectedSpy).toHaveBeenCalledTimes(0)

        fireEvent.click(buttons[0])

        expect(onErrorSpy).toHaveBeenCalledTimes(1)
        expect(onSuccessSpy).toHaveBeenCalledTimes(1)
        expect(onCompleteSpy).toHaveBeenCalledTimes(0)
        expect(onSelectedSpy).toHaveBeenCalledTimes(0)

        fireEvent.click(buttons[1])

        expect(onErrorSpy).toHaveBeenCalledTimes(1)
        expect(onSuccessSpy).toHaveBeenCalledTimes(1)
        expect(onCompleteSpy).toHaveBeenCalledTimes(0)
        expect(onSelectedSpy).toHaveBeenCalledTimes(1)

        fireEvent.click(buttons[1])

        expect(onErrorSpy).toHaveBeenCalledTimes(1)
        expect(onSuccessSpy).toHaveBeenCalledTimes(1)
        expect(onCompleteSpy).toHaveBeenCalledTimes(1)
        expect(onSelectedSpy).toHaveBeenCalledTimes(1)
    })
})
