import { FormLabel } from '@material-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { CommonComponents } from '../common_components'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { Rating } from './Rating'

const meta: Meta = {
  title: 'components/Rating',
  component: Rating,
  subcomponents: {
    FormControl: CommonComponents.FormControl,
    FormHelperText: CommonComponents.FormHelperText,
    FormLabel: FormLabel
  }
}

export default meta

function Checkboxform() {
  return (
    <Formik
      initialValues={{ rating: 0 }}
      validationSchema={Yup.object().shape({
        rating: Yup.number().required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Values', values)
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form>
        <Rating
          label='A Rating Field'
          helperText='With helper text'
          name='rating'
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  )
}

export function RatingForm() {
  return <Checkboxform />
}
