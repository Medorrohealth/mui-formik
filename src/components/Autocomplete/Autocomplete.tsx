import {
  Autocomplete as MUIAutocomplete,
  AutocompleteProps as MUIAutocompleteProps,
  ChipTypeMap,
  TextField
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldProps } from '../FieldProps'

export type AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> = FormikFieldProps<
  Omit<
    MUIAutocompleteProps<
      T,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    'renderInput'
  >
>

export function Autocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
  name,
  validate,
  label,
  InputLabelProps = {},
  FormHelperTextProps = {},
  disabled = false,
  required = false,
  helperText,
  ...restProps
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) {
  const [field, meta, helpers] = useField({ name, validate })
  console.log('Autocomplete value', field.value)
  return (
    <MUIAutocomplete
      {...restProps}
      {...field}
      onChange={(_event, value) => {
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
