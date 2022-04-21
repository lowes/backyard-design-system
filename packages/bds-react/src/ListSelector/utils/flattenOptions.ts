import type { OptionProps } from '../../Select'

const flattenOptions = (options, parent) => options.reduce(
    (opts, opt, index) => {
        const { children, options, ...option } = opt

        opts.push({
            'data-option-id': parent > -1
                ? `${parent}-${index}`
                : `${index}`,
            ...option
        })

        if (options) {
            opts.push(flattenOptions(options, index))
        }

        return opts.flat()
    },
    [] as OptionProps[]
)

export {
    flattenOptions
}

export default flattenOptions
