import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Rating from './Rating'

describe('Rating Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Rating
                value={2.5}
                name="test-rating"
                data-testid="test-rating"
            />
        )

        const rating = getByTestId('test-rating')

        expect(rating).toBeInTheDocument()
    })

    it('updates value on click', () => {
        const { getByLabelText } = render(
            <Rating
                interactive
                defaultValue={1.0}
                name="test-rating"
                data-testid="test-rating"
            />
        )

        const star1_0 = getByLabelText('1 Star')
        const star3_0 = getByLabelText('3 Stars')

        expect(star1_0.checked).toEqual(true)
        expect(star3_0.checked).toEqual(false)

        fireEvent.click(star3_0)

        expect(star1_0.checked).toEqual(false)
        expect(star3_0.checked).toEqual(true)
    })

    it('clear rating on click if already selected', () => {
        const { getByLabelText } = render(
            <Rating
                interactive
                defaultValue={1.0}
                name="test-rating"
                data-testid="test-rating"
            />
        )

        const star1_0 = getByLabelText('1 Star')

        expect(star1_0.checked).toEqual(true)

        fireEvent.click(star1_0, {
            clientX: 1
        })

        expect(star1_0.checked).toEqual(false)
    })

    it('triggers `onChange` when changed', () => {
        const onChangeSpy = jest.fn()
        const { getByLabelText } = render(
            <Rating
                interactive
                defaultValue={1.0}
                onChange={onChangeSpy}
                name="test-rating"
                data-testid="test-rating"
            />
        )

        const star3_0 = getByLabelText('3 Stars')

        expect(onChangeSpy).not.toHaveBeenCalled()

        fireEvent.click(star3_0)

        expect(onChangeSpy).toHaveBeenCalledTimes(1)
    })

    it('should select the empty input if value is null', () => {
        const { getByLabelText } = render(
            <Rating
                interactive
                name="test-rating"
                value={null}
            />
        )

        const empty = getByLabelText('Empty')

        expect(empty).toBeInTheDocument()
    })

    it('should trigger `onChangeHover` when enabled', () => {
        const onFocusSpy = jest.fn()
        const { getByLabelText } = render(
            <Rating
                interactive
                defaultValue={1.0}
                name="test-rating"
                data-testid="test-rating"
                onChangeHover={onFocusSpy}
            />
        )

        const star_1 = getByLabelText('1 Star')
        const star_2 = getByLabelText('2 Stars')

        fireEvent.focus(star_1)
        fireEvent.blur(star_1)
        fireEvent.focus(star_2)
        fireEvent.blur(star_2)

        expect(onFocusSpy).toHaveBeenCalledTimes(4)
    })

    it('should trigger `onMouseLeave`',() => {
        const onLeaveSpy = jest.fn()
        const { getByTestId } = render(
            <Rating
                value={2.5}
                name="test-rating"
                data-testid="test-rating"
                onMouseLeave={onLeaveSpy}
            />
        )

        const rating = getByTestId('test-rating')

        expect(onLeaveSpy).toHaveBeenCalledTimes(0)

        fireEvent.mouseEnter(rating)
        fireEvent.mouseLeave(rating)

        expect(onLeaveSpy).toHaveBeenCalledTimes(1)
    })

    it('should trigger `onMouseMove`',() => {
        const onMoveSpy = jest.fn()
        const { getByTestId } = render(
            <Rating
                value={2.5}
                name="test-rating"
                data-testid="test-rating"
                onMouseMove={onMoveSpy}
            />
        )

        const rating = getByTestId('test-rating')

        expect(onMoveSpy).toHaveBeenCalledTimes(0)

        fireEvent.mouseEnter(rating)
        fireEvent.mouseMove(rating)
        fireEvent.mouseMove(rating)

        expect(onMoveSpy).toHaveBeenCalledTimes(2)
    })
})
