import React, { useState } from 'react';
import { Button, FormField } from 'components/shared'

const Request = ({ request: { id, description, details, user: { email } } }) => {
  const [show, setShow] = useState(true);

  const edit = () => setShow(false)
  const update = () => {
    // Mutate
    setShow(true)
  }

  const render_show = () =>
    <tr key={id}>
      <td>{description}</td>
      <td>{details}</td>
      <td>{email}</td>
      <td>
        <Button primary text='Изменить' onClick={edit}/>
      </td>
    </tr>

  const render_edit = () =>
    <tr key={id}>
      <td>
        <FormField name='description' value={description}/>
      </td>
      <td>
        <FormField name='details' value={details}/>
      </td>
      <td>
        <FormField name='email' value={email}/>
      </td>
      <td>
        <Button primary text='Сохранить' onClick={update}/>
      </td>
    </tr>

  return (
    show ? render_show() : render_edit()
  )
}

export default Request