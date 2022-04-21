import { Wrapper } from './wrapper'

export const contexts = [{
    icon: 'photo',
    title: 'Themes',
    components: [
        Wrapper
    ],
    params: [
        // an array of params contains a set of predefined `props` for `components`
        { name: 'Light Theme', props: { theme: 'light' }, default: true },
        { name: 'Dark Theme', props: { theme: 'dark' } }
    ],
    options: {
        deep: false, // pass the `props` deeply into all wrapping components
        disable: false, // disable this contextual environment completely
        cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
    }
}]
