import * as React from 'react'

import { ChevronRight } from '@lowes-tech/bds-icons'

import { Link } from '../../../Link'

import { Wrapper } from './styles'

const ApiLink = ({ to, ...props }) => (
    <Wrapper>
        <Link
            to={to}
            size="small"
            color="text_link"
            iconAfter={<ChevronRight />}
            target="_blank"
            {...props}
        >
            API Documentation
        </Link>
    </Wrapper>
)

export { ApiLink }
export default ApiLink
