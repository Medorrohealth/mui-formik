import { FormLabel } from '@material-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { CommonComponents } from '../common_components'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { Checkbox } from './Checkbox'

const meta: Meta = {
  title: 'components/Checkbox',
  component: Checkbox,
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
      initialValues={{ enabled: false }}
      validationSchema={Yup.object().shape({
        enabled: Yup.boolean().required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Values', values)
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form>
        <Checkbox
          label='A checkbox option'
          helperText='With helper text'
          name='enabled'
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  )
}

export function CheckboxForm() {
  return <Checkboxform />
}
