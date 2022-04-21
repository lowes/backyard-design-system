import * as React from 'react'
import { render, fireEvent, act, Simulate } from '../../test-utils'
import Slider from './Slider'
import { findClosest, getDecimalPrecision, Identity, setValueIndex } from './SliderUtils'

describe('Slider Tests', () => {
    it('renders', async () => {
        const { findByText } = render(
            <Slider />
        )

        const minLabel = await findByText('1')
        const maxLabel = await findByText('10')

        expect(minLabel).toBeInTheDocument()
        expect(maxLabel).toBeInTheDocument()
    })

    it('prop: disabled', async () => {
        const { container } = render(
            <Slider disabled />
        )
        
        const hasDisabled = container.querySelector('.disabled')

        expect(hasDisabled).toBeInTheDocument()
    })

    it('prop: min and max', async () => {
        const { findByText } = render(
            <Slider min={1} max={100} />
        )

        const minLabel = await findByText('1')
        const maxLabel = await findByText('100')

        expect(minLabel).toBeInTheDocument()
        expect(maxLabel).toBeInTheDocument()
    })

    it('event: onChange on stepper', async () => {
        const eventObj = {
            onChangeFn: () => {}
        }

        const onChangeSpy = jest.spyOn(eventObj, 'onChangeFn')

        const { container } = render(
            <Slider
                onChange={eventObj.onChangeFn} />
        )

        const stepper = container.querySelector('.stepper')

        fireEvent.change(
            stepper, {
                target: {
                    value: '10'
                }
            }
        )

        expect(onChangeSpy).toBeCalled()
    })

    it('event: focus', async () => {
        const eventObj = {
            onFocusFn: () => {},
        }

        const onFocusSpy = jest.spyOn(eventObj, 'onFocusFn')

        const { container } = render(
            <div className='test-wrapper'>
                <Slider
                    onFocus={eventObj.onFocusFn} />
            </div>
        )

        const thumb = container.querySelector('.thumb')

        thumb.focus()

        expect(onFocusSpy).toHaveBeenCalled()
    })
})

describe('Slider Utils', () => {

    describe('setValueIndex', () => {
        it('should', () => {
            const result = setValueIndex({
                values: [1, 2],
                source: [1, 2, 3],
                newValue: 1,
                index: 0
            })

            expect(result).toStrictEqual([1, 2, 3])
        })
    })

    describe('Identity', () => {
        it('should return an identical value', () => {
            const identity = Identity(0)

            expect(identity).toEqual(0)
        })
    })
})