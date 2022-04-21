import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Select from './Select'
import OptionGroup from './OptionGroup'
import Option from './Option'

describe('Select Tests', () => {
    it('renders', async () => {
        const { findAllByText } = render(
            <Select>
                <Option value='1'>One</Option>
            </Select>
        )

        const optionText = await findAllByText('One')

        optionText.forEach(text => {
            expect(text).toBeInTheDocument()
        })
    })

    it('renders with undefined option children', () => {
        const { container } = render(
            <Select>
                <Option></Option>
            </Select>
        )

        const option = container.querySelector('option')

        expect(option).toBeInTheDocument()
    })

    it('should have className shape--rounded', () => {
        const { container } = render(
            <Select>
                <Option value='1'>One</Option>
                <Option value='2'>Two</Option>
            </Select>
        )

        const wrapper = container.querySelector('.select--wrapper')

        expect(wrapper.classList.contains('shape--rounded')).toBe(true)
    })


    describe('select wrapper', () => {
        it('should have className shape--rounded', () => {
            const { container } = render(
                <Select
                    shape='rounded'>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const wrapper = container.querySelector('.select--wrapper')

            expect(wrapper.classList.contains('shape--rounded')).toBe(true)
        })

        it('should have className interaction--false', () => {
            const { container } = render(
                <Select
                    interaction={true}
                >
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const wrapper = container.querySelector('.select--wrapper')

            expect(wrapper.classList.contains('interaction--true')).toBe(false)
        })

        it('should have className state--error', () => {
            const { container } = render(
                <Select
                    state='error'>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const wrapper = container.querySelector('.select--wrapper')

            expect(wrapper.classList.contains('state--error')).toBe(true)
        })

        it('should have className state--success', () => {
            const { container } = render(
                <Select
                    state='success'>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const wrapper = container.querySelector('.select--wrapper')

            expect(wrapper.classList.contains('state--success')).toBe(true)
        })
    })

    describe('prop: disabled', () => {
        it('should not have disabled class', () => {
            const { container } = render(
                <Select>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.classList.contains('disabled')).toBe(false)
            expect(select.hasAttribute('disabled')).toBe(false)
        })

        it('should have disabled class', () => {
            const { container, getByRole } = render(
                <Select
                    disabled={true}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.hasAttribute('disabled')).toBe(true)
        })
    })

    describe('prop: state', () => {
        it('should not have a state', () => {
            const { container } = render(
                <Select>
                    <Option value='1'>One</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.hasAttribute('data-invalid')).toBe(false)
            expect(select.hasAttribute('aria-invalid')).toBe(false)
        })

        it('should not have data-invalid and aria-invalid attributes', () => {
            const { container } = render(
                <Select
                    state='default'>
                    <Option value='1'>One</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.hasAttribute('data-invalid')).toBe(false)
            expect(select.hasAttribute('aria-invalid')).toBe(false)
        })

        it('should have data-invalid and aria-invalid attributes when state is error', () => {
            const { container } = render(
                <Select
                    state='error'>
                    <Option value='1'>One</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.hasAttribute('data-invalid')).toBe(true)
            expect(select.hasAttribute('aria-invalid')).toBe(true)
        })

        it('should not have data-invalid and aria-invalid attributes when state is success', () => {
            const { container } = render(
                <Select
                    state='success'>
                    <Option value='1'>One</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            expect(select.hasAttribute('data-invalid')).toBe(false)
            expect(select.hasAttribute('aria-invalid')).toBe(false)
        })
    })

    describe('prop: onChange', () => {
        it('should change select.value to the appropriate value', () => {
            const eventHandlers = {
                onChangeFn: () => { },
            }

            const { container } = render(
                <Select
                    onChange={eventHandlers.onChangeFn}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.change(select, {
                target: {
                    value: '2'
                }
            })

            expect(select.value).toBe('2')
        })

        it('should call the onChange function prop one time', () => {
            const eventHandlers = {
                onChangeFn: () => { },
            }

            const onChangeSpy = jest.spyOn(eventHandlers, 'onChangeFn')

            const { container } = render(
                <Select
                    onChange={eventHandlers.onChangeFn}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.change(select, {
                target: {
                    value: '2'
                }
            })

            expect(onChangeSpy).toBeCalledTimes(1)
        })
    })

    describe('prop: onFocus', () => {
        it('should call the onFocus function prop one time', () => {
            const eventHandlers = {
                onFocusFn: () => { },
            }

            const onFocusSpy = jest.spyOn(eventHandlers, 'onFocusFn')

            const { container } = render(
                <Select
                    onFocus={eventHandlers.onFocusFn}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.focus(select)

            expect(onFocusSpy).toBeCalledTimes(1)
        })
    })

    describe('prop: onBlur', () => {
        it('should call the onBlur function prop one time', () => {
            const eventHandlers = {
                onBlurFn: () => { },
            }

            const onBlurSpy = jest.spyOn(eventHandlers, 'onBlurFn')

            const { container } = render(
                <Select
                    onBlur={eventHandlers.onBlurFn}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.focus(select)
            fireEvent.blur(select)

            expect(onBlurSpy).toBeCalledTimes(1)
        })
    })

    describe('prop: onClick', () => {
        it('should call the onClick function prop one time', () => {
            const eventHandlers = {
                onClickFn: () => { },
            }

            const onClickSpy = jest.spyOn(eventHandlers, 'onClickFn')

            const { container } = render(
                <Select
                    onClick={eventHandlers.onClickFn}>
                    <Option value='1'>One</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.click(select)

            expect(onClickSpy).toHaveBeenCalledTimes(1)
        })
    })

    describe('prop: onKeyDown', () => {
        it('should call the onKeyDown function prop one time', () => {
            const eventHandlers = {
                onKeyDownFn: () => { },
            }

            const onKeyDownSpy = jest.spyOn(eventHandlers, 'onKeyDownFn')

            const { container } = render(
                <Select
                    onKeyDown={eventHandlers.onKeyDownFn}>
                    <Option value='1'>One</Option>
                    <Option value='2'>Two</Option>
                </Select>
            )

            const select = container.querySelector('.select--input')

            fireEvent.keyDown(select, {
                key: 'ArrowUp'
            })

            expect(onKeyDownSpy).toBeCalledTimes(1)
        })
    })
})