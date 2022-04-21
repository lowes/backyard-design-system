import * as React from 'react'
import { render } from '../../../test-utils'

import canFocus from './canFocus'

describe('utils/functions/canFocus Tests', () => {
    it('true -> blanket document active element test validates', () => {
        const { container } = render(
            <div>
                <button className="prev" />
                <button className="next" />
            </div>,
        )

        const prev = container.querySelector('.prev')
        const next = container.querySelector('.next')

        expect(canFocus(prev, next)).toBe(true)
    })

    it('false -> prev invalid args', () => {
        expect(canFocus()).toBe(false)
    })

    it('false -> next invalid args', () => {
        expect(canFocus(true as any)).toBe(false)
    })

    it('false -> next tabIndex = -1', () => {
        const { container } = render(
            <div>
                <button className="prev" />
                <button className="next" tabIndex={-1} />
            </div>,
        )

        const prev = container.querySelector('.prev')
        const next = container.querySelector('.next')

        expect(canFocus(prev, next)).toBe(false)
    })

    it('false -> no test validated', () => {
        const { container } = render(
            <div>
                <button className="prev" />
                <div className="next" tabIndex={0} />
            </div>,
        )

        const prev = container.querySelector('.prev') as HTMLElement
        const next = container.querySelector('.next') as HTMLElement

        next.focus = () => null

        expect(canFocus(prev, next)).toBe(false)
    })

    it('false -> no test validated & prev no focus', () => {
        const { container } = render(
            <div>
                <button className="prev" />
                <div className="next" tabIndex={0} />
            </div>,
        )

        const prev = container.querySelector('.prev') as HTMLElement
        const next = container.querySelector('.next') as HTMLElement

        prev.focus = null // should never happen, but need to check just in case
        next.focus = () => null

        expect(canFocus(prev, next)).toBe(false)
    })

    it('false -> no test validated no focus', () => {
        const { container } = render(
            <div>
                <button className="prev" />
                <div className="next" tabIndex={0} />
            </div>,
        )

        const prev = container.querySelector('.prev') as HTMLElement
        const next = container.querySelector('.next') as HTMLElement

        next.focus = null

        expect(canFocus(prev, next)).toBe(false)
    })
})
