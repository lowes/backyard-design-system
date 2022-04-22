import Theme from '@lowes-tech/bds-tokens/v3/light/_theme'

type BackyardTheme = typeof Theme

type BackyardOverrideProps = 'as'

interface BaseProps {
    // Extended for styled-components
    // since it can render an entirely new component
    as?: React.ElementType
}

type OverrideTypes = string | number | symbol

type BackyardBaseProps<T, O extends OverrideTypes = ''> = Omit<Omit<React.HTMLProps<T>, BackyardOverrideProps> & BaseProps, O>

interface BackyardToken extends BackyardTheme {}

export {
    BackyardBaseProps,
    BackyardOverrideProps,
    BackyardToken
}

export default BackyardBaseProps
