const hueRotation = (hue: number, rotation: number) => {
    return (360 + hue + rotation) % 360
}

const saturationAdjustment = (saturation: number, adjustment: number) => {
    return Math.min(Math.max(saturation + adjustment, 0), 100)
}

const lightnessAdjustment = (lightness: number, adjustment: number) => {
    return Math.min(Math.max(lightness + adjustment, 0), 100)
}

const toHSLArray = (hsl: string) => {
    return hsl.match(/\d+/g).map(Number)
}

export {
    hueRotation,
    saturationAdjustment,
    lightnessAdjustment,
    toHSLArray
}

export default {
    hueRotation,
    saturationAdjustment,
    lightnessAdjustment,
    toHSLArray
}