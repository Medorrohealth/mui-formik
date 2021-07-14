import { TextField as MUITextField, TextFieldProps } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type SelectProps = FormikFieldProps<Omit<TextFieldProps, 'variant'>>

export function Select({ name, validate, label, ...restProps }: SelectProps) {
  const [field, meta] = useField({ name, validate })
  return (
    <MUITextField
      {...restProps}
      {...field}
      variant='outlined'
      label={label}
      select
      error={!!meta.error}
      helperText={meta.error || restProps.helperText}
    >
      {restProps.children}
    </MUITextField>
  )
}
