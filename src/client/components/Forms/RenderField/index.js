import React from 'react'
import { Form } from 'semantic-ui-react'

const RenderField = ({input, label, type, meta: {touched, error}}) => (
  <Form.Group>
      <Form.Input {...input} placeholder={label} type={type} error={touched && error}/>
  </Form.Group>
);

export default RenderField
