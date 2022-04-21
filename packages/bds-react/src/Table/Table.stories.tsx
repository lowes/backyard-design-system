import { select, boolean, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import {
    GridV3 as Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Table', decorators: [withKnobs] }

const variants = [
    'Variant',
    {
        outlined: 'outlined',
        filled: 'filled',
    },
    'outlined',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultTable = () => (
    <>
        <Grid.Column start={6} end={12}>
            <Table 
                shape={select(...shapes)}
                rightRule={boolean('rightRule', true)}
                variant='filled'
            >
                <TableHead>
                    <TableRow>
                        <TableHeader>Description Name That is Kinda Really Long</TableHeader>
                        <TableHeader>Item 1</TableHeader>
                        <TableHeader>Item 2</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Specification</TableCell>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell info="hello world">Specification</TableCell>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Specification</TableCell>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Specification</TableCell>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid.Column>

        <ApiLink to='#' />
    </>
)

export const Specification = () => (
    <>
        <Grid.Column start={6} end={12}>
            <Table 
                shape={select(...shapes)}
                variant='outlined'
            >
                <TableBody>
                    <TableRow>
                        <TableHeader>
                            Too Long of a Description Name That Just Keeps On Going and Going
                            and Going
                        </TableHeader>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Description</TableHeader>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader info="bonjour le monde">
                            Description
                        </TableHeader>
                        <TableCell>
                            Specification Speci ficat ion Specif ication Sp ecific ati on
                            Specification Specification Specification{' '}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Description</TableHeader>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>
                            Description that's kinda long
                        </TableHeader>
                        <TableCell>Specification</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid.Column>

        <ApiLink to='#' />
    </>
)
