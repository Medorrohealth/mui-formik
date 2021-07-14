import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { CommonComponents } from '../common_components'
import { Autocomplete } from './Autocomplete'

const meta: Meta = {
  title: 'components/Autocomplete',
  component: Autocomplete,
  subcomponents: { ...CommonComponents }
}

export default meta

const Options = [
  'The Godfather',
  'Talladega Nights',
  'Aladdin',
  'Oops, I did it again'
] as const

export function AutocompleteForm() {
  return (
    <Formik
      initialValues={{ value: Options[0] }}
      validationSchema={Yup.object().shape({
        value: Yup.string().required('Please select a value').label('Value')
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
        <Autocomplete
          name='value'
          label='Value'
          options={Options}
          helperText='With helper text'
        />
        <SubmitButton color='primary' variant='contained'>
          Submit
        </SubmitButton>
      </Form>
    </Formik>
  )
}

export function AutocompleteMultipleSelect() {
  return (
    <Formik
      initialValues={{ value: [Options[0]] }}
      validationSchema={Yup.object().shape({
        value: Yup.array(
          Yup.string().required('Please select a value').label('Value')
        )
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
        <Autocomplete
          multiple
          name='value'
          label='Value'
          options={Options}
          helperText='With helper text'
        />
        <SubmitButton color='primary' variant='contained'>
          Submit
        </SubmitButton>
      </Form>
    </Formik>
  )
}
