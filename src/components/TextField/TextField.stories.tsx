import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import { TextField } from './TextField'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { CommonComponents } from '../common_components'

const meta: Meta = {
  title: 'components/TextField',
  component: TextField,
  subcomponents: { ...CommonComponents }
}

export default meta

export function TextFieldInForm() {
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
        console.log('Values', values)
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
