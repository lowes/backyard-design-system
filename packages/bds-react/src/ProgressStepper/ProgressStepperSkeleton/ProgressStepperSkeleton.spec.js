import * as React from 'react'
import { render } from '../../../test-utils'
import ProgressStepperSkeleton from './ProgressStepperSkeleton'

describe('ProgressStepperSkeleton Snapshots', () => {
    test('ProgressStepperSkeleton default snapshot', () => {
        const { asFragment } = render(
            <ProgressStepperSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('ProgressStepperSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <ProgressStepperSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ProgressStepperSkeleton multiple steps', () => {
        const { asFragment } = render(
            <ProgressStepperSkeleton items={5} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ProgressStepperSkeleton has caption options', () => {
        const { asFragment } = render(
            <ProgressStepperSkeleton withCaption={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('should test orientation and sizing', () => {
        const directions = ['row', 'column']

        directions.forEach(direction => {
            const { asFragment } = render(
                <ProgressStepperSkeleton direction={direction} />
            )
    
            expect(asFragment()).toMatchSnapshot()
        }) 
    })
})