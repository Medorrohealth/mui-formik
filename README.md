# mui-formik

> Bleeding edge Formik Material-UI Bindings. Material-UI @ next and Formik name only binds. Check out the storybook.

[![NPM](https://img.shields.io/npm/v/mui-formik.svg)](https://www.npmjs.com/package/mui-formik) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```bash
yarn add mui-formik
```

## Usage

```tsx
import React, { Component } from 'react'

import { DateTimePicker } from 'mui-formik'
import AdapterDayjs from '@material-ui/lab/AdapterDayjs' // or any other adapter you please
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import { Formik, Form } from 'formik'

function Example() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        onSubmit={(values) => {
          console.log(values.date)
        }}
      >
        <Form>
          <DateTimePicker name='date' />
        </Form>
      </Formik>
    </LocalizationProvider>
  )
}
```

## License

MIT © [medorrohealth](https://github.com/medorrohealth)
