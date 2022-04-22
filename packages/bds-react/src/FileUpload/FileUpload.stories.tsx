import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { GridV3 as Grid, FileUpload, FormControl, FormHeading, FileUploadSkeleton } from '../'
import files from './mocks/files'
import { ApiLink } from '../utils/storybook/ApiLink'

const variants = [
    'Variant',
    {
        button: 'button',
        dropzone: 'dropzone',
    },
    'dropzone',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export default { title: '@lowes-tech/bds-react/FileUpload', decorators: [withKnobs] }

export const DefaultFileUpload = () => (
    <Grid.Column start={6} end={12}>
        <FileUpload
            variant={select(...variants)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
            multiple={boolean('multiple', true)}
            maxFiles={number('maxFiles', 0)}
            onChange={action('onChange')}
            onDrop={action('onDrop')}
            onFileAdd={action('onFileAdd')}
            onFileRemove={action('onFileRemove')}
            onSuccess={action('onSuccess')}
            onError={action('onError')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const FileLoadingState = () => (
    <Grid.Column start={6} end={12}>
        <FileUpload
            variant={select(...variants)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
            multiple={boolean('multiple', true)}
            maxFiles={number('maxFiles', 0)}
            onDrop={(event, { acceptedFiles }) => {
                acceptedFiles.forEach((file) => {
                    file.setState('loading')

                    // Upload file...

                    setTimeout(() => {
                        const chance = Math.random()
                        // If upload fails...
                        if (chance < 0.25) {
                            file.setState('error', [
                                {
                                    message: `Custom error (${chance.toPrecision(2)})`,
                                    code: `custom-error-${chance.toPrecision(2)}` as any,
                                },
                            ])
                        } else {
                            // Else, show upload completed!
                            file.setState('completed')
                        }
                    }, Math.min(Math.random() * 2000, 1000))
                })
            }}
            onChange={action('onChange')}
            onFileAdd={action('onFileAdd')}
            onFileRemove={action('onFileRemove')}
            onSuccess={action('onSuccess')}
            onError={action('onError')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const DefaultFiles = () => (
    <Grid.Column start={6} end={12}>
        <FileUpload
            variant={select(...variants)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
            multiple={boolean('multiple', true)}
            maxFiles={number('maxFiles', 0)}
            defaultFiles={files}
            onChange={action('onChange')}
            onDrop={action('onDrop')}
            onFileAdd={action('onFileAdd')}
            onFileRemove={action('onFileRemove')}
            onSuccess={action('onSuccess')}
            onError={action('onError')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const AcceptFileType = () => (
    <Grid.Column start={6} end={12}>
        <FileUpload
            variant={select(...variants)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
            multiple={boolean('multiple', true)}
            maxFiles={number('maxFiles', 0)}
            label="This dropzone only accepts png images"
            accept="image/png"
            onChange={action('onChange')}
            onDrop={action('onDrop')}
            onFileAdd={action('onFileAdd')}
            onFileRemove={action('onFileRemove')}
            onSuccess={action('onSuccess')}
            onError={action('onError')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>FileUpload Skeleton (Button)</FormHeading>
            <br />
            <FileUploadSkeleton
                variant="button"
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>FileUpload Skeleton (Dropzone)</FormHeading>
            <br />
            <FileUploadSkeleton
                variant="dropzone"
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
    </Grid.Column>
)
