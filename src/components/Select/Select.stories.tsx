import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { CommonComponents } from '../common_components'
import { Select } from './Select'
import { MenuItem } from '@material-ui/core'

const meta: Meta = {
  title: 'components/Select',
  component: Select,
  subcomponents: { ...CommonComponents }
}

export default meta

const Options = ['A', 'B', 'C'] as const

const YupOptions = Yup.string()
  .oneOf(Options as any)
  .required()

export function TextFieldInForm() {
  return (
    <Formik
      initialValues={{ select: 'A' }}
      validationSchema={Yup.object().shape({
        select: YupOptions
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
        <Select name='select' label='Pick one' helperText='With helper text'>
          {Options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
        <SubmitButton color='primary' variant='contained'>
          Submit
        </SubmitButton>
      </Form>
    </Formik>
  )
}
