/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/prefer-default-export */

export function clean(context) {
    return Object.keys(context).reduce((acc, key) => {
        const _acc = acc

        if (context[key] !== undefined) {
            _acc[key] = context[key]
        }

        return _acc
    }, {})
}
