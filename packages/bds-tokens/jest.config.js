const baseConfig = require('../../jest.config')

const dir = __dirname

module.exports = {
    ...baseConfig,
    coverageDirectory: `${dir}/.coverage`,
    testRegex: `${dir}/tests/.*((\\.|/*.)(test|spec))\\.[jt]sx?$`,
    testEnvironment: 'jsdom',
}
