import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { CommonComponents } from '../common_components'
import { TimePicker } from './TimePicker'
import AdapterDateFns from '@material-ui/lab/AdapterDayjs'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'

const meta: Meta = {
  title: 'components/TimePicker',
  component: TimePicker,
  subcomponents: { ...CommonComponents }
}

export default meta

export function TimePickerForm() {
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
          <TimePicker name='date' label='Time' helperText='With helper text' />
          <SubmitButton color='primary' variant='contained'>
            Submit
          </SubmitButton>
        </Form>
      </Formik>
    </LocalizationProvider>
  )
}
