const baseConfig = require('./jest.base.config')

module.exports = {
    ...baseConfig,
    setupFilesAfterEnv: [
        `./packages/bds-react/test-utils/jest.setup.ts`
    ],
}
