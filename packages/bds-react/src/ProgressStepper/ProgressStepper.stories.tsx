import React from 'react'
import styled from 'styled-components'
import {
    GridV3 as Grid,
    ProgressStepper,
    ProgressStep,
    FormGroup,
    FormControlLabel,
    Button,
    Switch,
    ProgressStepperSkeleton
} from '../'
import { CreditCard, HomeOutlined } from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/ProgressStepper', decorators: [withKnobs] }

const StyledGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${({ theme }) => theme.sizes.size_32};
`

const sizes = {
    small: 'small',
    large: 'large'
} as const

const directions = {
    row: 'row',
    column: 'column'
}

export const RowDirection = () => {
    const [step, setStep] = React.useState(0)
    const [states, setStates] = React.useState({})

    return (
        <Grid.Column start={6} end={12}>
            <ProgressStepper
                nonLinear={boolean('Non Linear', false)}
                direction="row"
                size={select('Sizes', sizes, 'small')}
                step={step}
                steps={[{
                    state: states[0],
                    title: 'First Step',
                    caption: 'caption Text for step one',
                    onClick: () => setStep(0)
                }, {
                    state: states[1],
                    title: 'Second Step',
                    caption: 'caption text for step two',
                    onClick: () => setStep(1)
                }, {
                    state: states[2],
                    title: 'Third Step',
                    caption: 'caption text for step three',
                    onClick: () => setStep(2)
                }]}
            />
            <br /><br /><br />
            <ProgressStepper
                nonLinear={boolean('Non Linear', false)}
                direction="row"
                size={select('Sizes', sizes, 'small')}
                step={step}
                steps={[{
                    state: states[0],
                    title: 'First Step',
                    caption: 'caption Text for step one',
                    onClick: () => setStep(0)
                }, {
                    state: states[1],
                    title: 'Second Step',
                    caption: 'caption text for step two',
                    onClick: () => setStep(1)
                }, {
                    state: states[2],
                    disabled: true,
                    icon: <CreditCard />,
                    title: 'Third Step',
                    caption: 'caption text for step three (disabled)',
                    onClick: () => setStep(2)
                }, {
                    state: states[3],
                    icon: <HomeOutlined />,
                    title: 'Fourth Step',
                    caption: 'caption text for step four',
                    onClick: () => setStep(3)
                }]}
            />
            <br /><br /><br />
            <ProgressStepper
                nonLinear={boolean('Non Linear', false)}
                direction="row"
                size={select('Sizes', sizes, 'small')}
                step={step}
            >
                <ProgressStep
                    state={states[0]}
                    title="First Step"
                    caption="caption Text for step one"
                    onSelected={action('onSelected (step 1)')}
                    onComplete={action('onComplete (step 1)')}
                    onError={action('onError (step 1)')}
                    onSuccess={action('onSuccess (step 1)')}
                    onClick={() => setStep(0)}
                />
                <ProgressStep
                    state={states[1]}
                    title="Second Step"
                    caption="caption text for step two"
                    onSelected={action('onSelected (step 2)')}
                    onComplete={action('onComplete (step 2)')}
                    onError={action('onError (step 2)')}
                    onSuccess={action('onSuccess (step 2)')}
                    onClick={() => setStep(1)}
                />
                <ProgressStep
                    state={states[2]}
                    title="Third Step"
                    caption="caption text for step three"
                    onSelected={action('onSelected (step 3)')}
                    onComplete={action('onComplete (step 3)')}
                    onError={action('onError (step 3)')}
                    onSuccess={action('onSuccess (step 3)')}
                    onClick={() => setStep(2)}
                />
                <ProgressStep
                    state={states[3]}
                    icon={<CreditCard />}
                    title="Fourth Step"
                    caption="caption text for step four"
                    onSelected={action('onSelected (step 4)')}
                    onComplete={action('onComplete (step 4)')}
                    onError={action('onError (step 4)')}
                    onSuccess={action('onSuccess (step 4)')}
                    onClick={() => setStep(3)}
                />
                <ProgressStep
                    state={states[4]}
                    icon={<HomeOutlined />}
                    title="Fifth Step"
                    caption="caption text for step five"
                    onSelected={action('onSelected (step 5)')}
                    onComplete={action('onComplete (step 5)')}
                    onError={action('onError (step 5)')}
                    onSuccess={action('onSuccess (step 5)')}
                    onClick={() => setStep(4)}
                />
            </ProgressStepper>
            <br /><br />
            <StyledGroup>
                <FormGroup
                    direction="row"
                >
                    <Button
                        variant="secondary"
                        color="neutral"
                        size="small"
                        onClick={() => setStep((step) => step - 1)}
                    >
                        Previous Step
                    </Button>
                    <Button
                        variant="ghost"
                        color="interactive"
                        size="small"
                        onClick={() => setStates((states) => ({ ...states, [step]: 'complete' }))}
                    >
                        Complete Step
                    </Button>
                    {states[step] === 'error'
                        ? (
                            <Button
                                variant="ghost"
                                color="green"
                                size="small"
                                onClick={() => setStates((states) => ({ ...states, [step]: null }))}
                            >
                                Resolve Error
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                color="red"
                                size="small"
                                onClick={() => setStates((states) => ({ ...states, [step]: 'error' }))}
                            >
                                Trigger Error
                            </Button>
                        )
                    }
                    <Button
                        variant="primary"
                        size="small"
                        onClick={() => setStep((step) => step + 1)}
                    >
                        Next Step
                    </Button>
                </FormGroup>
            </StyledGroup>

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const ColumnDirection = () => {
    const [step, setStep] = React.useState(0)
    const [states, setStates] = React.useState({})

    return (
        <>
            <Grid.Column start={6} end={12}>
                <ProgressStepper
                    nonLinear={boolean('Non Linear', false)}
                    direction="column"
                    size={select('Sizes', sizes, 'small')}
                    step={step}
                    steps={[{
                        state: states[0],
                        title: 'First Step',
                        caption: 'caption Text for step one',
                        onClick: () => setStep(0)
                    }, {
                        state: states[1],
                        title: 'Second Step',
                        caption: 'caption text for step two',
                        onClick: () => setStep(1)
                    }, {
                        state: states[2],
                        title: 'Third Step',
                        caption: 'caption text for step three',
                        onClick: () => setStep(2)
                    }]}
                />
                <br /><br /><br />
                <ProgressStepper
                    nonLinear={boolean('Non Linear', false)}
                    direction="column"
                    size={select('Sizes', sizes, 'small')}
                    step={step}
                    steps={[{
                        state: states[0],
                        title: 'First Step',
                        caption: 'caption Text for step one',
                        onClick: () => setStep(0)
                    }, {
                        state: states[1],
                        title: 'Second Step',
                        caption: 'caption text for step two',
                        onClick: () => setStep(1)
                    }, {
                        state: states[2],
                        disabled: true,
                        icon: <CreditCard />,
                        title: 'Third Step',
                        caption: 'caption text for step three (disabled)',
                        onClick: () => setStep(2)
                    }, {
                        state: states[3],
                        icon: <HomeOutlined />,
                        title: 'Fourth Step',
                        caption: 'caption text for step four',
                        onClick: () => setStep(3)
                    }]}
                />
                <br /><br /><br />
                <ProgressStepper
                    nonLinear={boolean('Non Linear', false)}
                    direction="column"
                    size={select('Sizes', sizes, 'small')}
                    step={step}
                >
                    <ProgressStep
                        state={states[0]}
                        title="First Step"
                        caption="caption Text for step one"
                        onSelected={action('onSelected (step 1)')}
                        onComplete={action('onComplete (step 1)')}
                        onError={action('onError (step 1)')}
                        onSuccess={action('onSuccess (step 1)')}
                        onClick={() => setStep(0)}
                    />
                    <ProgressStep
                        state={states[1]}
                        title="Second Step"
                        caption="caption text for step two"
                        onSelected={action('onSelected (step 2)')}
                        onComplete={action('onComplete (step 2)')}
                        onError={action('onError (step 2)')}
                        onSuccess={action('onSuccess (step 2)')}
                        onClick={() => setStep(1)}
                    />
                    <ProgressStep
                        state={states[2]}
                        title="Third Step"
                        caption="caption text for step three"
                        onSelected={action('onSelected (step 3)')}
                        onComplete={action('onComplete (step 3)')}
                        onError={action('onError (step 3)')}
                        onSuccess={action('onSuccess (step 3)')}
                        onClick={() => setStep(2)}
                    />
                    <ProgressStep
                        state={states[3]}
                        icon={<CreditCard />}
                        title="Fourth Step"
                        caption="caption text for step four"
                        onSelected={action('onSelected (step 4)')}
                        onComplete={action('onComplete (step 4)')}
                        onError={action('onError (step 4)')}
                        onSuccess={action('onSuccess (step 4)')}
                        onClick={() => setStep(3)}
                    />
                    <ProgressStep
                        state={states[4]}
                        icon={<HomeOutlined />}
                        title="Fifth Step"
                        caption="caption text for step five"
                        onSelected={action('onSelected (step 5)')}
                        onComplete={action('onComplete (step 5)')}
                        onError={action('onError (step 5)')}
                        onSuccess={action('onSuccess (step 5)')}
                        onClick={() => setStep(4)}
                    />
                </ProgressStepper>
            </Grid.Column>
            <Grid.Column start={6} end={12}>
                <StyledGroup style={{ minHeight: '100%' }}>
                    <FormGroup
                        direction="column"
                    >
                        <Button
                            variant="secondary"
                            color="neutral"
                            size="small"
                            onClick={() => setStep((step) => step - 1)}
                        >
                            Previous Step
                        </Button>
                        <Button
                            variant="ghost"
                            color="interactive"
                            size="small"
                            onClick={() => setStates((states) => ({ ...states, [step]: 'complete' }))}
                        >
                            Complete Step
                        </Button>
                        {states[step] === 'error'
                            ? (
                                <Button
                                    variant="ghost"
                                    color="green"
                                    size="small"
                                    onClick={() => setStates((states) => ({ ...states, [step]: null }))}
                                >
                                    Resolve Error
                                </Button>
                            ) : (
                                <Button
                                    variant="ghost"
                                    color="red"
                                    size="small"
                                    onClick={() => setStates((states) => ({ ...states, [step]: 'error' }))}
                                >
                                    Trigger Error
                                </Button>
                            )
                        }
                        <Button
                            variant="primary"
                            size="small"
                            onClick={() => setStep((step) => step + 1)}
                        >
                            Next Step
                    </Button>
                    </FormGroup>
                </StyledGroup>

                <ApiLink to='#' />
            </Grid.Column>
        </>
    )
}

export const Skeleton = () => (
    <ProgressStepperSkeleton
        direction={select('Direction', directions, 'row')}
        size={select('Size', sizes, 'small')}
        withCaption={boolean('Caption', false)}
        steps={number('Steps', 4)}
        animate={boolean('Animate', false)}
    />
)