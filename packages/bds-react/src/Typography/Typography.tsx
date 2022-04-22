import classNames from 'classnames'
import * as React from 'react'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import type { ArticleProps, ArticleRef } from './Article'
import Article from './Article'
import type { CaptionProps, CaptionRef } from './Caption'
import Caption from './Caption'
import type { FootnoteProps, FootnoteRef } from './Footnote'
import Footnote from './Footnote'

import type { HeadingProps, HeadingRef } from './Headings'
import Heading from './Headings'
import type { ParagraphProps, ParagraphRef } from './Paragraph'
import Paragraph from './Paragraph'

import { FormHelperText, Label, Overline } from './styles/TypographyBase'

// Defines the possible variants of Typography
const variants = {
    // Web Headers
    // h1-h6 - medium on desktop, small on mobile
    h1: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={1} {...props} ref={ref} />
    )),
    h2: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={2} {...props} ref={ref} />
    )),
    h3: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={3} {...props} ref={ref} />
    )),
    h4: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={4} {...props} ref={ref} />
    )),
    h5: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={5} {...props} ref={ref} />
    )),
    h6: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => (
        <Heading level={6} {...props} ref={ref} />
    )),

    // Body Text
    // p - medium on desktop, small on mobile
    body_1: React.forwardRef<ParagraphRef, ParagraphProps>(({ className, ...props }, ref) => (
        <Paragraph className={classNames(className, 'body_1')} {...props} ref={ref} />
    )),
    // p - small
    body_2: React.forwardRef<ParagraphRef, ParagraphProps>(({ className, ...props }, ref) => (
        <Paragraph className={classNames(className, 'body_2')} {...props} ref={ref} />
    )),

    // Article Text
    // p - medium on desktop, small on mobile
    article: React.forwardRef<ParagraphRef, ArticleProps>((props, ref) => (
        <Article {...props} ref={ref} />
    )),

    // Caption Text
    // span - medium on desktop, small on mobile
    caption: React.forwardRef<CaptionRef, CaptionProps>((props, ref) => (
        <Caption {...props} ref={ref} />
    )),

    // Footnote Text
    // span - medium on desktop, small on mobile
    footnote: React.forwardRef<FootnoteRef, FootnoteProps>((props, ref) => (
        <Footnote {...props} ref={ref} />
    )),

    overline: React.forwardRef<TypographyRef, TypographyProps>((props, ref) => (
        <Overline {...props} ref={ref} />
    )),

    // Misc
    // label - medium on desktop, small on mobile
    label: React.forwardRef<TypographyRef, TypographyProps>((props, ref) => (
        <Label {...props} ref={ref} />
    )),

    // span - medium on desktop, small on mobile
    helper: React.forwardRef<TypographyRef, TypographyProps>((props, ref) => (
        <FormHelperText {...props} ref={ref} />
    )),
}

// For ease of use, maps some common names to tokens
const colors = {
    black: 'black',
    primary: 'text_primary',
    secondary: 'text_secondary',
    tertiary: 'text_tertiary',
    link: 'link',
    error: 'error',
    success: 'success',
    disabled: 'disabled',
    white: 'white',
}

/**
 * Gets color from map, else uses defined color
 *
 * @param {string} color
 */
const getColor = (color: string): string => {
    return colors[color] || color
}

/**
 * Adds class to typography
 *
 * @param {string} key
 * @param {string} value
 */
const addClass = (key: string, value: string): string => (value ? `${key}--${value}` : null)

/**
 * Backyard React Typography
 *
 * Combines all typographies into one React API
 *
 *  <Typography variant="body_small">This body text is always small</Typography>
 *
 *  <Typography variant="body">This body text is small on mobile, but medium on desktop</Typography>
 */
const Typography: BDSForwardRef<TypographyProps> = React.forwardRef<TypographyRef, TypographyProps>(
    function Typography(
        {
            align = 'left',
            bold = false,
            regular = false,
            className,
            color = 'primary',
            component,
            display,
            marginBottom,
            variant = 'body',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Typography')

        // Get component from variants, but default to span if not defined...
        const Component = component || variants[variant] || 'span'

        /**
         * Layout:
         *
         *  <Typography>
         *      ...
         *  </Typography>
         */
        return (
            <Component
                className={classNames(
                    'typography',
                    addClass('variant', variant),
                    addClass('display', display),
                    addClass('align', align),
                    {
                        bold,
                    },
                    className,
                )}
                color={getColor(color)}
                marginBottom={marginBottom}
                regular={regular}
                {...props}
                ref={ref}
            />
        )
    },
)

type TypographyRef = HeadingRef | ParagraphRef | ArticleRef | CaptionRef | FootnoteRef | HTMLSpanElement

interface TypographyProps extends BackyardBaseProps<TypographyRef> {
    /**
     * Aligns text to one of left, center, or right.
     */
    align?: 'left' | 'center' | 'right'
    /**
     * Makes text bold weight.
     */
    bold?: boolean
    /**
     * Makes text regular weight.
     */
    regular?: boolean
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Children
     */
    children: React.ReactNode
    /**
     * Backyard Color Token
     * Example: "interactive" or "primary"
     */
    color?: keyof BackyardToken['color']
    /**
     * Custom definition for HTML to use with Typography
     * Example: "p" for paragraph or "div" for div
     */
    component?: React.ElementType
    /**
     * CSS Display type of inline or block
     */
    display?: 'block' | 'inline'
    /**
     * Backyard spacing token for margin bottom.
     * Useful for when you have a lot of headers and don't want to
     * recreate styles for each variant of header you are using.
     */
    marginBottom?: keyof BackyardToken['sizes']
    /**
     * Variant of typography as defined in `variants` variable...
     */
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body_1'
        | 'body_2'
        | 'article'
        | 'caption'
        | 'overline'
        | 'footnote'
        | 'label'
        | 'helper'
}

Typography.bdsName = 'Typography'

export { Typography }

export type { TypographyProps, TypographyRef }

export default Typography
