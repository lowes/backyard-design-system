/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
const createChainedFunction = (...funcs) => {
    return funcs.reduce(
        (acc, func) => {
            if (func == null) {
                return acc
            }

            if (process.env.NODE_ENV !== 'production') {
                if (typeof func !== 'function') {
                    console.error( // eslint-disable-line no-console
                        'Backyard: invalid Argument Type, must only provide functions, undefined, or null.',
                    )
                }
            }

            return function chainedFunction(...args) {
                acc.apply(this, args)
                func.apply(this, args)
            }
        },
        () => { },
    )
}

export {
    createChainedFunction
}

export default createChainedFunction
