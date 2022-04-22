import TagFilled from '@lowes-tech/bds-icons/TagFilled'
import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Tile from './Tile'

describe('Tile Snapshots', () => {
    test('Tile default snapshot', () => {
        const { asFragment } = render(
            <Tile>
                <span>Hello World</span>
            </Tile>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('type:card', () => {
        describe('themes', () => {
            const themes = ['light', 'dark']

            themes.forEach((theme) => {
                test(`Tile ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <Tile variant='card'>
                                    <span>Hello World</span>
                                </Tile>
                            </React.Fragment>
                        </ThemeProvider>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('disabled prop', () => {
            test('Disabled prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='card'
                          disabled>
                        <span>Hello World</span>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('variants', () => {
            const colors = ['default', 'subdued']

            colors.forEach((color) => {
                test(`type card ${color} color snapshot`, () => {
                    const { asFragment } = render(
                        <Tile variant='card'
                              color={color}>
                            <span>Hello World</span>
                        </Tile>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('extra props', () => {
            test('Tile DOM props (id, className) snapshot', () => {
                const { asFragment } = render(
                    <Tile id='id'
                          variant='card'
                          className='classname'>
                        <p>Hello World</p>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('type:link', () => {
        describe('themes', () => {
            const themes = ['light', 'dark']

            themes.forEach((theme) => {
                test(`Tile ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <Tile variant='link'
                                      href='#'>
                                    <span>Hello World</span>
                                </Tile>
                            </React.Fragment>
                        </ThemeProvider>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('disabled prop', () => {
            test('Disabled prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='link'
                          disabled
                          href='#'>
                        <span>Hello World</span>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('disabledIcon prop', () => {
            test('DisabledIcon prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='link'
                          disabledIcon
                          href='#'>
                        <span>Hello World</span>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('icon prop', () => {
            test('change Icon prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='link'
                          icon={<TagFilled/>}
                          href='#'>
                        <span>Hello World</span>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('colors', () => {
            const colors = ['default', 'subdued']

            colors.forEach((color) => {
                test(`type link ${color} color snapshot`, () => {
                    const { asFragment } = render(
                        <Tile variant='link'
                              color={color}
                              href='#'>
                            <span>Hello World</span>
                        </Tile>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('extra props', () => {
            test('Tile DOM props (id, className) snapshot', () => {
                const { asFragment } = render(
                    <Tile id='id'
                          variant='link'
                          href='#'
                          className='classname'>
                        <p>Hello World</p>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('type:radio', () => {
        describe('themes', () => {
            const themes = ['light', 'dark']

            themes.forEach((theme) => {
                test(`Tile ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <Tile variant='radio'
                                      inputId='test'
                                      name='test-radio'
                                      value='test'>
                                    <span>Hello World</span>
                                </Tile>
                            </React.Fragment>
                        </ThemeProvider>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('disabled prop', () => {
            test('Disabled prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='radio'
                          inputId='test'
                          name='test-radio'
                          value='test'
                          disabled>
                        <p>Hello World</p>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('inputId prop', () => {
            test('inputId prop snapshot', () => {
                const { asFragment } = render(
                    <Tile variant='radio'
                          inputId='radio_1'
                          name='test-radio'
                          value='test'
                          disabled>
                        <p>Hello World</p>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('variants', () => {
            const colors = ['default', 'subdued']

            colors.forEach((color) => {
                test(`type radio ${color} color snapshot`, () => {
                    const { asFragment } = render(
                        <Tile variant='radio'
                              name='test-radio'
                              inputId='test'
                              value='test'
                              color={color}>
                            <p>Hello World</p>
                        </Tile>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('extra props', () => {
            test('Tile DOM props (id, className) snapshot', () => {
                const { asFragment } = render(
                    <Tile id='id'
                          variant='radio'
                          inputId='test'
                          name='test-radio'
                          value='test'
                          className='classname'>
                        <p>Hello World</p>
                    </Tile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})