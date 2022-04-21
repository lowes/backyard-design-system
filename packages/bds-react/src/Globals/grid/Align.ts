import { css } from 'styled-components'

export const AlignContent = css`
    .content-center { align-content: center; }
    .content-start { align-content: flex-start; }
    .content-end { align-content: flex-end; }
    .content-between { align-content: space-between; }
    .content-around { align-content: space-around; }
    .content-evenly { align-content: space-evenly; }
`

export const AlignItems = css`
    .items-start { align-items: flex-start; }
    .items-end { align-items: flex-end; }
    .items-center { align-items: center; }
    .items-baseline { align-items: baseline; }
    .items-stretch { align-items: stretch; }
`

export const AlignSelf = css`
    .self-auto { align-self: auto; }
    .self-start { align-self: flex-start; }
    .self-end { align-self: flex-end; }
    .self-center { align-self: center; }
    .self-stretch { align-self: stretch; }
`