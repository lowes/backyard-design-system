import type { ListSelectorMultipleProps } from '../ListSelectorMultiple'

/**
 * Clamps option to limited options
 *
 * @param type - action taen
 * @param option - current option number
 * @param options - list of options
 */
 const clampOption = (
    type: 'increment' | 'decrement' | 'first' | 'last',
    option: number,
    options: ListSelectorMultipleProps['options'],
) => {
    // Switch on type,
    switch (type) {
        // When first...
        case 'first':
            return clampOption('increment', -1, options)

        // When last...
        case 'last':
            return clampOption('decrement', options.length, options)

        // When decrementing...
        case 'decrement':
            // Clamp decrement to zero
            if (option === 0) {
                return clampOption('first', option, options)
            }

            // If next option is disabled,
            if (options[option - 1]?.disabled) {
                // Skip next option
                return clampOption('decrement', option - 1, options)
            }

            // Return decremented option
            return Math.max(option - 1, 0)
        // When incrementing...
        case 'increment':
        default:
            // Clamp increment to max number of items
            if (option === options.length - 1) {
                return clampOption('last', option, options)
            }

            // If next option is disabled,
            if (options[option + 1]?.disabled) {
                // Skip next option
                return clampOption('increment', option + 1, options)
            }

            // Return incremented option
            return Math.min(option + 1, options.length - 1)
    }
}

export {
    clampOption
}

export default clampOption
