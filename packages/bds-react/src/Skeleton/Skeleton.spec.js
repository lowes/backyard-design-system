import React from 'react'
import { render } from '../../test-utils'
import Skeleton from '.'

describe('Skeleton snapshots', () => {
    test('Default snapshot', () => {
        const { asFragment } = render(
            <Skeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Text snapshot', () => {
        const { asFragment } = render(
            <Skeleton variant='text' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Rect snapshot', () => {
        const { asFragment } = render(
            <Skeleton variant='rect' width='size_128' height='size_128'/>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Circle snapshot', () => {
        const { asFragment } = render(
            <Skeleton variant='circle' width='size_128' height='size_128'/>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pulse animation snapshot', () => {
        const { asFragment } = render(
            <Skeleton variant='text' animate />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Wave animation snapshot', () => {
        const { asFragment } = render(
            <Skeleton variant='text' animate />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})