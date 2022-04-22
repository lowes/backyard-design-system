/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
import * as React from 'react'

/**
 * Hook to use control the uncontrolled and controlled versions of
 * react component props such as `value or `defaultValue`
 *
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useControlled.js
 *
 * @param {any} arg.controlled - prop to get control from, if defined assumes controlled variant
 * @param {any} arg.default - default value of prop, if defined assumes uncontrolled
 * @param {any} arg.name - name of component path (used for debugging only)
 */
const useControlled = <T = unknown>({
    controlled,
    default: defaultProp,
    name,
}: UseControlledProps<T>): [T, (newValue: T) => void] => {
    const { current: isControlled } = React.useRef(controlled !== undefined)
    const [valueState, setValue] = React.useState(defaultProp)
    const value = isControlled ? controlled : valueState

    if (process.env.NODE_ENV !== 'production') {
        React.useEffect(() => {
            if (isControlled !== (controlled !== undefined)) {
                // eslint-disable-next-line no-console
                console.error(
                    [
                        `Backyard: A component is changing ${
                            isControlled ? 'a ' : 'an un'
                        }controlled ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` +
                            'element for the lifetime of the component.',
                        'More info: https://fb.me/react-controlled-components',
                    ].join('\n'),
                )
            }
        }, [controlled])

        const { current: defaultValue } = React.useRef(defaultProp)

        React.useEffect(() => {
            if (defaultValue !== defaultProp) {
                // eslint-disable-next-line no-console
                console.error(
                    [
                        `Backyard: A component is changing the default value`,
                        `of an uncontrolled ${name} after being initialized. `,
                        `To suppress this warning opt to use a controlled ${name}.`,
                    ].join('\n'),
                )
            }
        }, [JSON.stringify(defaultProp)])
    }

    const setValueIfUncontrolled = React.useCallback((newValue: T) => {
        if (!isControlled) {
            setValue(newValue)
        }
    }, [])

    return [value, setValueIfUncontrolled]
}

interface UseControlledProps<T = unknown> {
    /**
     * This prop contains the component value when it's controlled.
     */
    controlled: T | undefined
    /**
     * The default value when uncontrolled.
     */
    default: T | undefined
    /**
     * The component name displayed in warnings.
     */
    name: string
    /**
     * The name of the state variable displayed in warnings.
     */
    state?: string
}

export { useControlled }

export type { UseControlledProps }

export default useControlled
