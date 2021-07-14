import {
  FormControl,
  FormControlLabelProps,
  FormHelperText,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  RadioGroupProps as MUIRadioGroupProps
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { CommonFormControlProps, FormikFieldProps } from '../FieldProps'

export type RadioGroupProps = FormikFieldProps<
  Omit<FormControlLabelProps, 'control' | 'color'> & MUIRadioGroupProps
> & { children: JSX.Element[] }

export function RadioGroup({
  name,
  label,
  color = 'primary',
  disabled = false,
  validate,
  helperText,
  FormHelperTextProps = {},
  InputLabelProps = {},
  ...restProps
}: RadioGroupProps) {
  const [field, meta] = useField({ name, validate })
  const common: CommonFormControlProps = {
    color: color as any,
    disabled,
    required: true,
    error: !!meta.error,
    focused: false
  }
  helperText = meta.error || helperText
  return (
    <FormControl component='fieldset' id={name} {...common}>
      <FormLabel {...InputLabelProps} component='legend'>
        {label}
      </FormLabel>
      <MUIRadioGroup {...restProps} {...field} name={name} />
      {helperText ? (
        <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
