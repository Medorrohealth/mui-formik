import { TextField } from '@material-ui/core'
import {
  DatePicker as MUIDatePicker,
  DatePickerProps as MUIDatePickerProps
} from '@material-ui/lab'
import { Dayjs } from 'dayjs'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type DatePickerProps<T> = FormikFieldProps<
  Omit<MUIDatePickerProps<T>, 'renderInput'>
>

export function DatePicker<T = unknown>({
  name,
  validate,
  disabled = false,
  required = false,
  FormHelperTextProps = {},
  InputLabelProps = {},
  helperText,
  label,
  ...restProps
}: DatePickerProps<T>) {
  const [field, meta, helpers] = useField({ name, validate })
  return (
    <MUIDatePicker
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
