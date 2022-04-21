import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withContexts } from '@storybook/addon-contexts/react'
import { contexts } from './contexts'

addDecorator(withContexts(contexts))

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
})
