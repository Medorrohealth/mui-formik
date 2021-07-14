import { Meta } from '@storybook/react/types-6-0'
import { Form, Formik } from 'formik'
import React from 'react'
import { CommonComponents } from '../common_components'
import { ToggleButtonGroup } from './ToggleButtonGroup'
import * as Yup from 'yup'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { FormLabel, ToggleButton } from '@material-ui/core'

const meta: Meta = {
  title: 'components/ToggleButtonGroup',
  component: ToggleButtonGroup,
  subcomponents: {
    FormControl: CommonComponents.FormControl,
    FormHelperText: CommonComponents.FormHelperText,
    FormLabel: FormLabel,
    ToggleButton: ToggleButton
  }
}

export default meta

const Options = ['A', 'B', 'C'] as const

const YupOptions = Yup.string()
  .oneOf(Options as any)
  .required()

function ToggleButtonForm({ exclusive }: { exclusive?: boolean }) {
  return (
    <Formik
      initialValues={{ picks: exclusive ? 'A' : [] }}
      validationSchema={Yup.object().shape({
        picks: exclusive ? YupOptions : Yup.array(YupOptions)
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Values', values)
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form>
        <ToggleButtonGroup
          id='picks'
          name='picks'
          label='Picks'
          exclusive={exclusive}
          helperText='Helper Text'
        >
          {Options.map((it) => (
            <ToggleButton key={it} value={it}>
              {it}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  )
}

export function ToggleButtonGroupExclusive() {
  return <ToggleButtonForm exclusive />
}

export function ToggleButtonGroupMultiSelect() {
  return <ToggleButtonForm />
}
