import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button, FormField } from 'components/shared'

import { Update } from 'queries/Request'

const Request = ({ request }) => {
  const [show, setShow] = useState(true);
  const [description, setDescription] = useState(request.description)
  const [details, setDetails] = useState(request.details)
  const [email, setEmail] = useState(request.user.email)
  const [updateRequest, { data }] = useMutation(Update);

  const edit = () => setShow(false)
  const update = () => {
    updateRequest({ variables: { id: request.id, description, details, email } })
    setShow(true)
  }

  const render_show = () =>
    <tr key={request.id}>
      <td>{description}</td>
      <td>{details}</td>
      <td>{email}</td>
      <td>
        <Button primary text='Изменить' onClick={edit}/>
      </td>
    </tr>

  const render_edit = () =>
    <tr key={request.id}>
      <td>
        <FormField name='description' value={description} onChange={setDescription}/>
      </td>
      <td>
        <FormField name='details' value={details}  onChange={setDetails}/>
      </td>
      <td>
        <FormField name='email' value={email} onChange={setEmail}/>
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
