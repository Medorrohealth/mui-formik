import React from 'react'
import { LoadingButton, LoadingButtonProps } from '@material-ui/lab'
import { useFormikContext } from 'formik'

export type SubmitButtonProps = Omit<LoadingButtonProps, 'onClick' | 'type'>

export function SubmitButton(props: LoadingButtonProps) {
  const { isSubmitting, isValid, dirty, submitCount } = useFormikContext()
  return (
    <LoadingButton
      {...props}
      loading={props.loading || isSubmitting}
      type='submit'
      disabled={props.disabled || (!isValid && (dirty || submitCount > 0))}
    />
  )
}
