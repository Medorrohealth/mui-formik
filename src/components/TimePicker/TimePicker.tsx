import { TextField } from '@material-ui/core'
import {
  TimePicker as MUITimePicker,
  TimePickerProps as MUITimePickerProps
} from '@material-ui/lab'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type TimePickerProps<T> = FormikFieldProps<
  Omit<MUITimePickerProps<T>, 'renderInput'>
>

export function TimePicker<T = unknown>({
  name,
  validate,
  disabled = false,
  required = false,
  FormHelperTextProps = {},
  InputLabelProps = {},
  helperText,
  label,
  ...restProps
}: TimePickerProps<T>) {
  const [field, meta, helpers] = useField({ name, validate })
  return (
    <MUITimePicker
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
