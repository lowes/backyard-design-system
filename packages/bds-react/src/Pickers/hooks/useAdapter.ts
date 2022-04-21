import DateAdapter from '../classes/DateAdapter'
import { DateAdapterOptions } from '../classes/DateAdapter.d'

const useAdapter = (options?: DateAdapterOptions) => {
    const adapter = new DateAdapter(options)

    return adapter!
}

export {
    useAdapter
}

export default useAdapter
