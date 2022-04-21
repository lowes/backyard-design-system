import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { render, fireEvent } from '../../test-utils'

import {
    Tabs,
    Tab
} from './index'

describe('Tabs', () => {
    it('should render', async () => {
        const { getByText } = render(
            <Tabs>
                <Tab id='tab-1' label='Tab 1'>
                    <h1>Tab 1 Content</h1>
                </Tab>
            </Tabs>
        )

        const tabLabel = getByText('Tab 1')
        const tabContent = getByText('Tab 1 Content')

        expect(tabLabel).toBeInTheDocument()
        expect(tabContent).toBeInTheDocument()
    })

    it('should render without an explicit label', async () => {
        const { getByText } = render(
            <Tabs>
                <Tab id='tab-1'>
                    <h1>Tab 1 Content</h1>
                </Tab>
            </Tabs>
        )

        const tabLabel = getByText('Label')
        const tabContent = getByText('Tab 1 Content')

        expect(tabLabel).toBeInTheDocument()
        expect(tabContent).toBeInTheDocument()
    })

    it('should render a disabled tab', async () => {
        const { container } = render(
            <Tabs>
                <Tab id='tab-1' disabled={true}>
                    <h1>Tab 1 Content</h1>
                </Tab>
            </Tabs>
        )
        
        const tab1 = container.querySelector('.tab')

        expect(tab1.classList.contains('disabled')).toBe(true)
    })

    it('should run the onClick prop', async () => {
        const events = {
            onClickFn: (event) => {}
        }

        const onClickSpy = jest.spyOn(events, 'onClickFn')

        const { container } = render(
            <Tabs>
                <Tab
                    id='tab'
                    onClick={events.onClickFn}
                >
                    <h1>content</h1>
                </Tab>
            </Tabs>
        )

        const tab = container.querySelector('#tab')

        fireEvent.click(tab)

        expect(onClickSpy).toHaveBeenCalled()
    })

    it('should render all TabContent components', async () => {
        const { getByText } = render(
            <Tabs refreshContent>
                <Tab
                    id='tab-1'
                >
                    <h1>content 1</h1>
                </Tab>
                <Tab
                    id='tab-2'
                    disabled={true}
                >
                    <h1>content 2</h1>
                </Tab>
                <Tab
                    id='tab-3'
                >
                    <h1>content 2</h1>
                </Tab>
            </Tabs>
        )

        const container1 = getByText('content 1')

        expect(container1).toBeInTheDocument()
    })

    it('should select the third tab using the `Enter` key', async () => {
        const { container } = render(
            <Tabs>
                <Tab
                    id='tab-1'
                >
                    <h1>content 1</h1>
                </Tab>
                <Tab
                    id='tab-2'
                    disabled={true}
                >
                    <h1>content 2</h1>
                </Tab>
                <Tab
                    id='tab-3'
                >
                    <h1>content 2</h1>
                </Tab>
            </Tabs>
        )

        const tab3 = container.querySelector('#tab-3')

        act(() => {
            fireEvent.focus(tab3)

            fireEvent.keyDown(tab3, {
                key: 'Enter'
            })
        })

        expect(tab3.classList).toContain('selected')
    })

    it('should focus the third tab using the `ArrowRight` key', async () => {
        const { container } = render(
            <Tabs>
                <Tab
                    id='tab-1'
                >
                    <h1>content 1</h1>
                </Tab>
                <Tab
                    id='tab-2'
                    disabled={true}
                >
                    <h1>content 2</h1>
                </Tab>
                <Tab
                    id='tab-3'
                >
                    <h1>content 2</h1>
                </Tab>
            </Tabs>
        )

        const tab1 = container.querySelector('#tab-1')
        const tab3 = container.querySelector('#tab-3')

        act(() => {
            fireEvent.keyDown(tab1, {
                key: 'ArrowRight'
            })
    
            fireEvent.keyDown(tab3, {
                key: 'Enter'
            })

            fireEvent.keyDown(tab3, {
                key: 'ArrowLeft'
            })
    
            fireEvent.keyDown(tab1, {
                key: 'Enter'
            })
        })

        expect(tab1.classList).toContain('selected')
    })

    it('should trigger the `onKeyDown` function', async () => {
        const events = {
            onKeyDownFn: (event) => {}
        }

        const onKeyDownSpy = jest.spyOn(events, 'onKeyDownFn')

        const { container } = render(
            <Tabs>
                <Tab
                    id='tab-1'
                    onKeyDown={onKeyDownSpy}
                >
                    <h1>content 1</h1>
                </Tab>
                <Tab
                    id='tab-2'
                    disabled={true}
                >
                    <h1>content 2</h1>
                </Tab>
                <Tab
                    id='tab-3'
                >
                    <h1>content 2</h1>
                </Tab>
            </Tabs>
        )

        const tab1 = container.querySelector('#tab-1')

        act(() => {    
            fireEvent.keyDown(tab1, {
                key: 'Enter'
            })
        })

        expect(onKeyDownSpy).toHaveBeenCalled()
    })
})