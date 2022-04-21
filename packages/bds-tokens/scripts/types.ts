interface Theme {
    hue?: number
    saturation?: number
    lightness?: number
    alpha?: number
}

export interface Variant {
    name: string
    description: string
    light: Theme
    dark: Theme
    meta?: {}
}

export type Config = Record<string, Variant[]>