import { FormControlProps, InputProps } from '@material-ui/core'

export interface BaseFormikFieldProps {
  name: string
  validate?: (value: any) => undefined | string | Promise<any>
  fast?: boolean
  label?: string
}

export interface MUIFieldProps {
  helperText?: string
}

export type FormikFieldOmitProps =
  | 'value'
  | 'onChange'
  | 'multiple'
  | 'checked'
  | 'onChange'
  | 'onBlur'
  | 'error'

export type FormikFieldProps<T = InputProps> = BaseFormikFieldProps &
  MUIFieldProps &
  Omit<T, FormikFieldOmitProps>

const FormControlPicks: (keyof FormControlProps)[] = [
  'classes',
  'color',
  'disabled',
  'error',
  'focused',
  'fullWidth',
  'hiddenLabel',
  'margin',
  'required',
  'size',
  'sx',
  'variant'
]

function pick(object: any, keys: string[]): any {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}

export function pickFormControlProps(props: any) {
  return pick(props, FormControlPicks)
}

export type CommonFormControlProps = {
  disabled: boolean
  error: boolean
  required: boolean
  focused: boolean
  color: InputProps['color']
}
