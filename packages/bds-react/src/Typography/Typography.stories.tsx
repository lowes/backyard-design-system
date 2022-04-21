import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import styled from 'styled-components'
import { GridV3 as Grid, Typography } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Typography', decorators: [withKnobs] }

const aligns = [
    'Align',
    {
        left: 'left',
        center: 'center',
        right: 'right',
    },
    'left',
] as const

const colors = [
    'Color',
    {
        text_solid: 'text_solid',
        text_primary: 'text_primary',
        text_secondary: 'text_secondary',
        text_tertiary: 'text_tertiary',
        text_interactive: 'text_interactive',
        text_red: 'text_red',
        text_green: 'text_green',
        text_disabled: 'text_disabled',
        text_solid_inverse: 'text_solid_inverse',
    },
    'text_primary',
] as const

const displays = [
    'Display',
    {
        block: 'block',
        inline: 'inline',
    },
    'block',
] as const

const StyledRow = styled(Grid.Row)`
    border-bottom: 1px solid ${({ theme }) => theme.color.border_subdued};
    margin-bottom: ${({ theme }) => theme.sizes.size_20};
`

const variantOptions = {
    header: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    body: ['body_1', 'body_2'],
    article: ['article'],
    caption: ['caption'],
    misc: ['label', 'helper', 'overline'],
} as const

export const HeaderTypography = () => (
    <>
        {variantOptions.header.map((variant) => {
            return (
                <StyledRow>
                    <Typography variant="caption" color="text_tertiary">
                        {variant}
                    </Typography>
                    <Grid.Column start={6} end={12}>
                        <Typography
                            align={select(...aligns)}
                            color={select(...colors)}
                            regular={boolean('Regular', false)}
                            display={select(...displays)}
                            variant={variant}
                        >
                            {text('Text', 'Backyard Design System')}
                        </Typography>
                    </Grid.Column>
                </StyledRow>
            )
        })}

        <ApiLink to='#' />
    </>
)

export const BodyTypography = () => (
    <>
        {variantOptions.body.map((variant) => {
            return (
                <StyledRow>
                    <Typography variant="caption" color="text_tertiary">
                        {variant}
                    </Typography>
                    <Grid.Column start={6} end={12}>
                        <Typography
                            align={select(...aligns)}
                            color={select(...colors)}
                            bold={boolean('Bold', false)}
                            display={select(...displays)}
                            variant={variant}
                        >
                            {text('Text', 'Backyard Design System')}
                        </Typography>
                    </Grid.Column>
                </StyledRow>
            )
        })}

        <ApiLink to='#' />
    </>
)

export const ArticleTypography = () => (
    <>
        {variantOptions.article.map((variant) => {
            return (
                <StyledRow>
                    <Typography variant="caption" color="text_tertiary">
                        {variant}
                    </Typography>
                    <Grid.Column start={6} end={12}>
                        <Typography
                            align={select(...aligns)}
                            color={select(...colors)}
                            bold={boolean('Bold', false)}
                            display={select(...displays)}
                            variant={variant}
                        >
                            {text('Text', 'Backyard Design System')}
                        </Typography>
                    </Grid.Column>
                </StyledRow>
            )
        })}

        <ApiLink to='#' />
    </>
)

export const CaptionTypography = () => (
    <>
        {variantOptions.caption.map((variant) => {
            return (
                <StyledRow>
                    <Typography variant="caption" color="text_tertiary">
                        {variant}
                    </Typography>
                    <Grid.Column start={6} end={12}>
                        <Typography
                            align={select(...aligns)}
                            color={select(...colors)}
                            bold={boolean('Bold', false)}
                            display={select(...displays)}
                            variant={variant}
                        >
                            {text('Text', 'Backyard Design System')}
                        </Typography>
                    </Grid.Column>
                </StyledRow>
            )
        })}

        <ApiLink to='#' />
    </>
)

export const MiscTypography = () => (
    <>
        {variantOptions.misc.map((variant) => {
            return (
                <StyledRow>
                    <Typography variant="caption" color="text_tertiary">
                        {variant}
                    </Typography>
                    <Grid.Column start={6} end={12}>
                        <Typography
                            align={select(...aligns)}
                            color={select(...colors)}
                            bold={boolean('Bold', false)}
                            display={select(...displays)}
                            variant={variant}
                        >
                            {text('Text', 'Backyard Design System')}
                        </Typography>
                    </Grid.Column>
                </StyledRow>
            )
        })}

        <ApiLink to='#' />
    </>
)

export const HTMLTags = () => (
    <>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <br/>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. </p>
        
        <br />

        <p className='body-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis. </p>

        <br />

        <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non enim ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lacus mi, suscipit quis urna vel, tincidunt semper enim. Nam maximus semper nisi, et imperdiet neque viverra sed. Pellentesque dignissim et turpis id commodo. Nullam vitae fermentum velit. Vestibulum tempor quam vitae quam ultrices semper et nec diam. Pellentesque ut nisl vel diam rutrum convallis vulputate nec eros. Maecenas sollicitudin mollis arcu, eu accumsan ex aliquet quis.
        </article>

        <ApiLink to='#' />
    </>
)
