import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Radio from '../Radio'
import RadioTile from '../Tile/RadioTile'
import RadioGroup from './RadioGroup'

describe('Radio Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <RadioGroup name="test-radio-group" />
        )

        const radio = getByRole('radiogroup')

        expect(radio).toBeInTheDocument()
    })

    describe('tests with children radio components', () => {
        describe('with Radio', () => {
            it('updates checked on change', () => {
                const { getAllByRole } = render(
                    <RadioGroup name="test-radio-group">
                        <Radio id="radio_0" value="0"/>
                        <Radio id="radio_1" value="1" defaultChecked/>
                        <Radio id="radio_2" value="2"/>
                    </RadioGroup>
                )

                const [radio0, radio1, radio2] = getAllByRole('radio')

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(false)
                expect(radio2.checked).toEqual(true)
            })

            it('updates checked on change with default value', () => {
                const { getAllByRole } = render(
                    <RadioGroup name="test-radio-group" defaultValue="1">
                        <Radio id="radio_0" value="0"/>
                        <Radio id="radio_1" value="1"/>
                        <Radio id="radio_2" value="2"/>
                    </RadioGroup>
                )

                const [radio0, radio1, radio2] = getAllByRole('radio')

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(false)
                expect(radio2.checked).toEqual(true)
            })

            it('doesn`t update checked on click via value', () => {
                const { getAllByRole } = render(
                    <RadioGroup name="test-radio-group" value="1">
                        <Radio id="radio_0" value="0"/>
                        <Radio id="radio_1" value="1"/>
                        <Radio id="radio_2" value="2"/>
                    </RadioGroup>
                )

                const [radio0, radio1, radio2] = getAllByRole('radio')

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)
            })

            it('triggers `onChange` when changed', () => {
                const onChangeSpy = jest.fn()
                const { getByTestId } = render(
                    <RadioGroup name="test-radio-group" onChange={onChangeSpy}>
                        <Radio id="radio_0" value="0" data-testid='radio_0'/>
                        <Radio id="radio_1" value="1" data-testid='radio_1' defaultChecked/>
                        <Radio id="radio_2" value="2" data-testid='radio_2'/>
                    </RadioGroup>
                )

                const radio2 = getByTestId('radio_2')

                expect(onChangeSpy).not.toHaveBeenCalled()

                fireEvent.click(radio2)

                expect(onChangeSpy).toHaveBeenCalledTimes(1)
            })
        })

        describe('with RadioTile', () => {
            it('updates checked on change', () => {
                const { getByTestId } = render(
                    <RadioGroup name="test-radio-tile-group">
                        <RadioTile id="radio_0" value="0" data-testid="radio_0">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_1" value="1" defaultChecked data-testid="radio_1">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_2" value="2" data-testid="radio_2">
                            <span>radio_0</span>
                        </RadioTile>
                    </RadioGroup>
                )

                const radio0 = getByTestId('radio_0')
                const radio1 = getByTestId('radio_1')
                const radio2 = getByTestId('radio_2')

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(false)
                expect(radio2.checked).toEqual(true)
            })

            it('updates checked on change with default value', () => {
                const { getByTestId } = render(
                    <RadioGroup name="test-radio-tile-group" defaultValue="0">
                        <RadioTile id="radio_0" value="0" data-testid="radio_0">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_1" value="1" data-testid="radio_1">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_2" value="2" data-testid="radio_2">
                            <span>radio_0</span>
                        </RadioTile>
                    </RadioGroup>
                )

                const radio0 = getByTestId('radio_0')
                const radio1 = getByTestId('radio_1')
                const radio2 = getByTestId('radio_2')

                expect(radio0.checked).toEqual(true)
                expect(radio1.checked).toEqual(false)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(false)
                expect(radio2.checked).toEqual(true)
            })

            it('doesn`t update checked on click via value', () => {
                const { getByTestId } = render(
                    <RadioGroup name="test-radio-tile-group" value='1'>
                        <RadioTile id="radio_0" value="0" data-testid="radio_0">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_1" value="1" data-testid="radio_1">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_2" value="2" data-testid="radio_2">
                            <span>radio_0</span>
                        </RadioTile>
                    </RadioGroup>
                )

                const radio0 = getByTestId('radio_0')
                const radio1 = getByTestId('radio_1')
                const radio2 = getByTestId('radio_2')

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)

                fireEvent.click(radio2)

                expect(radio0.checked).toEqual(false)
                expect(radio1.checked).toEqual(true)
                expect(radio2.checked).toEqual(false)
            })

            it('triggers `onChange` when changed', () => {
                const onChangeSpy = jest.fn()
                const { getByTestId } = render(
                    <RadioGroup name="test-radio-tile-group" onChange={onChangeSpy}>
                        <RadioTile id="radio_0" value="0" data-testid="radio_0">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_1" value="1" data-testid="radio_1">
                            <span>radio_0</span>
                        </RadioTile>
                        <RadioTile id="radio_2" value="2" data-testid="radio_2">
                            <span>radio_0</span>
                        </RadioTile>
                    </RadioGroup>
                )

                const radio0 = getByTestId('radio_0')
                const radio2 = getByTestId('radio_2')

                expect(onChangeSpy).not.toHaveBeenCalled()

                fireEvent.click(radio2)

                expect(onChangeSpy).toHaveBeenCalledTimes(1)

                fireEvent.click(radio0)
                fireEvent.click(radio0)

                expect(onChangeSpy).toHaveBeenCalledTimes(2)
            })
        })
    })
})
