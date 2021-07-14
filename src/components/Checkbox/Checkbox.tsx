import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { CommonFormControlProps, FormikFieldProps } from '../FieldProps'

export type CheckboxProps = FormikFieldProps<
  Omit<FormControlLabelProps, 'control'> & MUICheckboxProps
>

export function Checkbox({
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
}: CheckboxProps) {
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
        control={<MUICheckbox />}
      />
      {helperText ? (
        <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
