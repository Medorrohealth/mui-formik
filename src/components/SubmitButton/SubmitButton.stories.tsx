import { LoadingButton } from '@material-ui/lab'
import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { TextField } from '../TextField/TextField'
import { SubmitButton } from './SubmitButton'

const meta: Meta = {
  title: 'components/SubmitButton',
  component: SubmitButton,
  subcomponents: {
    LoadingButton: LoadingButton
  }
}

export default meta

export function SubmitButtonInForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Please enter an email')
          .label('Email')
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Values, ', values)
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
      validateOnChange
    >
      <Form>
        <TextField name='email' label='Email' />
        <SubmitButton color='primary' variant='contained'>
          Submit
        </SubmitButton>
      </Form>
    </Formik>
  )
}
