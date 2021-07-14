import { TextField } from '@material-ui/core'
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps
} from '@material-ui/lab'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type DateTimePickerProps<T> = FormikFieldProps<
  Omit<MUIDateTimePickerProps<T>, 'renderInput'>
>

export function DateTimePicker<T = unknown>({
  name,
  validate,
  disabled = false,
  required = false,
  FormHelperTextProps = {},
  InputLabelProps = {},
  helperText,
  label,
  ...restProps
}: DateTimePickerProps<T>) {
  const [field, meta, helpers] = useField({ name, validate })
  return (
    <MUIDateTimePicker
      {...restProps}
      {...field}
      onChange={(value: T | null) => {
        helpers.setValue(value)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          disabled={disabled}
          required={required}
          FormHelperTextProps={FormHelperTextProps}
          InputLabelProps={InputLabelProps}
          error={!!meta.error}
          helperText={meta.error || helperText}
          label={label}
        />
      )}
    />
  )
}
