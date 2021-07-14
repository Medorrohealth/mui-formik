import {
  FormControl,
  FormHelperText,
  FormLabel,
  Rating as MUIRating,
  RatingProps as MUIRatingProps
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { CommonFormControlProps, FormikFieldProps } from '../FieldProps'

export type RatingProps = FormikFieldProps<MUIRatingProps>

export function Rating({
  name,
  label,
  color = 'primary',
  disabled = false,
  validate,
  helperText,
  required = false,
  FormHelperTextProps = {},
  InputLabelProps = {},
  ...restProps
}: RatingProps) {
  const [field, meta] = useField({ name, validate })
  const common: CommonFormControlProps = {
    color: 'primary',
    disabled,
    required,
    error: !!meta.error,
    focused: false
  }
  helperText = meta.error || helperText
  const value = parseInt(field.value)
  return (
    <FormControl id={name} {...common}>
      <FormLabel {...InputLabelProps} component='legend'>
        {label}
      </FormLabel>
      <MUIRating
        {...restProps}
        {...field}
        value={value}
        name={name}
        onChange={(event) => {
          field.onChange(event)
        }}
      />
      {helperText ? (
        <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
