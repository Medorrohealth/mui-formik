import { FormControlLabel, FormLabel, Radio } from '@material-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { CommonComponents } from '../common_components'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { RadioGroup } from './Radio'

const meta: Meta = {
  title: 'components/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    FormControl: CommonComponents.FormControl,
    FormHelperText: CommonComponents.FormHelperText,
    FormLabel: FormLabel
  }
}

export default meta

const Options = ['A', 'B', 'C'] as const

const YupOptions = Yup.string()
  .oneOf(Options as any)
  .required()

export function RadioGroupForm() {
  return (
    <Formik
      initialValues={{ pick: 'A' }}
      validationSchema={Yup.object().shape({
        pick: YupOptions
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Values', values)
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form>
        <RadioGroup
          label='A checkbox option'
          helperText='With helper text'
          name='pick'
        >
          {Options.map((opt) => (
            <FormControlLabel
              key={opt}
              value={opt}
              label={opt}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  )
}
