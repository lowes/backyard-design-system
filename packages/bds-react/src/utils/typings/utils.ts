/**
 * Type is any value of generic T
 */
export type ValueOf<T> = T[keyof T]

/**
 * Type is and key of generic T
 */
export type KeyOf<T> = keyof T
