import {
  Checkbox as MUICheckbox,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  Switch as MUISwitch,
  SwitchProps as MUISwitchProps
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { CommonFormControlProps, FormikFieldProps } from '../FieldProps'

export type SwitchProps = FormikFieldProps<
  Omit<FormControlLabelProps, 'control'> & MUISwitchProps
>

export function Switch({
  name,
  label,
  color = 'primary',
  disabled = false,
  required = false,
  validate,
  helperText,
  FormHelperTextProps = {},
  InputLabelProps = {},
  ...restProps
}: SwitchProps) {
  const [field, meta] = useField({ name, validate })
  const common: CommonFormControlProps = {
    color: color === 'default' ? 'primary' : color,
    disabled,
    required,
    error: !!meta.error,
    focused: false
  }
  helperText = meta.error || helperText
  return (
    <FormControl id={name} {...common}>
      <FormControlLabel
        {...InputLabelProps}
        {...restProps}
        {...field}
        label={label}
        control={<MUISwitch />}
      />
      {helperText ? (
        <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
