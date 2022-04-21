import * as React from 'react'
import { fireEvent, render } from '../../test-utils'
import PVS from './PVS'

describe('PVS Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <PVS value="test" fill="#123" title="example" data-testid="pvs-example" />,
        )

        const pvs = getByTestId('pvs-example')

        expect(pvs).toBeInTheDocument()
    })

    it('updates checked on change', () => {
        const { getByTestId } = render(
            <PVS value="test" fill="#123" title="example" data-testid="pvs-example" />,
        )

        const pvs = getByTestId('pvs-example')

        expect(pvs.checked).toEqual(false)

        fireEvent.click(pvs)

        expect(pvs.checked).toEqual(true)
    })

    describe('fill attribute test', () => {
        it('should have an img element, image fill', () => {
            render(<PVS value="test" fill="http://some.where/img.jpg" title="example" />)

            const swatch = document.getElementsByClassName('swatch')[0].childNodes
            expect(swatch.length).toBe(2)
            expect(swatch.item(0).nodeName).toBe('IMG')
        })

        it('should NOT have an img element, hex fill three digits', () => {
            render(<PVS value="test" fill="#123" title="example" />)

            const swatch = document.getElementsByClassName('swatch')[0].childNodes
            expect(swatch.length).toBe(1)
            expect(swatch.item(0).nodeName).not.toBe('IMG')
        })

        it('should NOT have an img element, hex fill six digits', () => {
            render(<PVS value="test" fill="#112233" title="example" />)

            const swatch = document.getElementsByClassName('swatch')[0].childNodes
            expect(swatch.length).toBe(1)
            expect(swatch.item(0).nodeName).not.toBe('IMG')
        })
    })
})
