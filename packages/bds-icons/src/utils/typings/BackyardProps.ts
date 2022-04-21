import type { RootObject as BackyardTheme } from '@lowes-tech/bds-tokens/v2/light/theme'

type BackyardOverrideProps = 'as'

interface BaseProps {
    as?: React.ElementType
}

type BackyardBaseProps<T, O extends keyof any = ''> = Omit<
    Omit<React.HTMLProps<T>, BackyardOverrideProps> & BaseProps,
    O
>

interface BackyardToken extends BackyardTheme {}

export { BackyardBaseProps, BackyardOverrideProps, BackyardToken }

export default BackyardBaseProps
