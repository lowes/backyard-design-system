import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import styled from 'styled-components'
import { Button, GridV3 as Grid, ScrollToTop, Typography } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import type { ScrollbarProps } from '../Scrollbar'

export default { title: '@lowes-tech/bds-react/ScrollToTop', decorators: [withKnobs] }

const FillerDiv = styled.div<ScrollbarProps>`
    background-color: #bfe5bf;
    height: ${({ size }) => `${size * 10}rem`};
    min-height: 4rem;
    width: 100%;
    margin-bottom: 1rem;
`

export const DefaultScrollToTop = () => (
    <>
        <div
            style={{
                backgroundColor: 'lightgray',
                marginBottom: '1.5rem',
                height: '8rem',
                width: '100%',
            }}
        />
        <Button>Button0</Button>
        <Grid.Row>
        <Grid.Column start={6} end={12}>
                <Typography variant="h1">Header 1</Typography>
            </Grid.Column>
            {[...Array(10)].map((value, index) => {
                return (
                    <Grid.Column start={6} end={12}>
                        <FillerDiv size={index % 2} />
                    </Grid.Column>
                )
            })}
        </Grid.Row>
        <Button>Button1</Button>
        <Grid.Row>
            <Grid.Column start={6} end={12}>
                <Typography variant="h1">Header 2</Typography>
            </Grid.Column>
            {[...Array(10)].map((value, index) => {
                return (
                    <Grid.Column start={6} end={12}>
                        <FillerDiv size={index % 2} />
                    </Grid.Column>
                )
            })}
        </Grid.Row>
        <Button>Button2</Button>
        <Grid.Row>
            <Grid.Column start={6} end={12}>
                <Typography variant="h1">Header 3</Typography>
            </Grid.Column>
            {[...Array(10)].map((value, index) => {
                return (
                    <Grid.Column start={6} end={12}>
                        <FillerDiv size={index % 2} />
                    </Grid.Column>
                )
            })}
        </Grid.Row>
        <Button>Button3</Button>
        <ScrollToTop
            hide={boolean('Hide', false)}
            noAnimation={boolean('no Animation', false)}
            showAt={number('Show At', 400)}
            bottomPosition={text('Bottom Position', 'size-48')}
            rightPosition={text('Right Position', 'size-32')}
        />

        <ApiLink to='#' />
    </>
)

export const ScrollToRef = () => {
    const header1Ref = React.useRef(null)

    return (
        <>
            <div
                style={{
                    backgroundColor: 'lightgray',
                    marginBottom: '1.5rem',
                    height: '8rem',
                    width: '100%',
                }}
            />
            <Grid.Row>
                <Grid.Column start={6} end={12}>
                    <Typography variant="h1" ref={header1Ref}>
                        Header 1
                    </Typography>
                </Grid.Column>
                {[...Array(10)].map((value, index) => {
                    return (
                        <Grid.Column start={6} end={12}>
                            <FillerDiv size={index % 2} />
                        </Grid.Column>
                    )
                })}
            </Grid.Row>
            <Grid.Row>
                <Grid.Column start={6} end={12}>
                    <Typography variant="h1">Header 2</Typography>
                </Grid.Column>
                {[...Array(10)].map((value, index) => {
                    return (
                        <Grid.Column start={6} end={12}>
                            <FillerDiv size={index % 2} />
                        </Grid.Column>
                    )
                })}
            </Grid.Row>
            <Grid.Row>
                <Grid.Column start={6} end={12}>
                    <Typography variant="h1">Header 3</Typography>
                </Grid.Column>
                {[...Array(10)].map((value, index) => {
                    return (
                        <Grid.Column start={6} end={12}>
                            <FillerDiv size={index % 2} />
                        </Grid.Column>
                    )
                })}
            </Grid.Row>
            <ScrollToTop
                scrollToRef={header1Ref}
                hide={boolean('Hide', false)}
                noAnimation={boolean('no Animation', false)}
                showAt={number('Show At', 400)}
                bottomPosition={text('Bottom Position', 'size-48')}
                rightPosition={text('Right Position', 'size-32')}
            />

            <ApiLink to='#' />
        </>
    )
}
