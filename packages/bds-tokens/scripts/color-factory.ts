import config from './configs/config'
import base from './configs/base'
import { hueRotation, saturationAdjustment, lightnessAdjustment, toHSLArray } from './utils'

type Theme = 'light' | 'dark'

const colorFactory = (
    theme: Theme
) => {

    return Object.assign(
        {},
        ...Object.entries(config).map(([role, variants]) => {
            const baseColor = toHSLArray(base[role])

            return {
                ...variants.reduce((accumulator, {name, ...settings}) => {
                    let { hue, saturation, lightness, alpha } = settings[theme]

                    const h = (hue) ? hueRotation(baseColor[0], hue) : baseColor[0]
                    const s = (saturation) ? saturationAdjustment(baseColor[1], saturation) : baseColor[1]
                    const l = (lightness) ? lightnessAdjustment(baseColor[2], lightness) : baseColor[2]
                    let a = (alpha) ? alpha.toString() : '1'

                    a = (a.length > 1) ? `.${a}` : `${a}`

                    return {
                        ...accumulator,
                        [name]: `hsl(${h}, ${s}%, ${l}%, ${a})`
                    }
                }, {})
            }
        })
    )
}

export { colorFactory }
export default colorFactory