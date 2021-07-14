import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { CommonComponents } from '../common_components'
import { DatePicker } from './DatePicker'
import AdapterDateFns from '@material-ui/lab/AdapterDayjs'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'

const meta: Meta = {
  title: 'components/DatePicker',
  component: DatePicker,
  subcomponents: { ...CommonComponents }
}

export default meta

export function DatePickerForm() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{}}
        validationSchema={Yup.object().shape({
          date: Yup.mixed().required('Please select a date')
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
          <DatePicker name='date' label='Date' helperText='With helper text' />
          <SubmitButton color='primary' variant='contained'>
            Submit
          </SubmitButton>
        </Form>
      </Formik>
    </LocalizationProvider>
  )
}
