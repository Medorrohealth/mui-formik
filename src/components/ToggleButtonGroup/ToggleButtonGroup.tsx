import {
  FormControl,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  InputLabelProps,
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButtonGroupProps as MUIToggleButtonGroupProps
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { CommonFormControlProps, FormikFieldProps } from '../FieldProps'

export type ToggleButtonGroupProps = FormikFieldProps<MUIToggleButtonGroupProps>

export function ToggleButtonGroup({
  name,
  label,
  helperText,
  color = 'primary',
  required = false,
  disabled = false,
  InputLabelProps = {},
  FormHelperTextProps = {},
  validate,
  exclusive,
  ...restProps
}: ToggleButtonGroupProps) {
  const [field, meta, helpers] = useField({
    name,
    validate,
    multiple: !exclusive
  })
  const helperId = `${name}-helper`
  helperText = meta.error || helperText
  const common: CommonFormControlProps = {
    color: color !== 'standard' ? color : 'primary',
    disabled,
    required,
    error: !!meta.error,
    focused: false
  }
  return (
    <FormControl id={name} {...common}>
      <FormLabel htmlFor={name} component='legend' {...InputLabelProps}>
        {label}
      </FormLabel>
      <MUIToggleButtonGroup
        {...restProps}
        exclusive={!!exclusive}
        color={color}
        id={name}
        aria-describedby={helperId}
        value={field.value}
        onChange={
          !disabled
            ? (_event, value) => {
                helpers.setValue(value)
              }
            : undefined
        }
        onBlur={() => {
          helpers.setTouched(true, true)
        }}
      />
      {helperText ? (
        <FormHelperText id={helperId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}
