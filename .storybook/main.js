module.exports = {
    stories: ['../**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-contexts/register'
    ],
    core: {
        builder: 'webpack5',
    },
}
