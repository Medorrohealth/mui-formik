import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type TextFieldProps = FormikFieldProps<MUITextFieldProps>

export function TextField({ name, validate, ...restProps }: TextFieldProps) {
  const [field, meta] = useField({ name, validate })
  return (
    <MUITextField
      {...restProps}
      {...field}
      error={!!meta.error}
      helperText={meta.error || restProps.helperText}
    />
  )
}
