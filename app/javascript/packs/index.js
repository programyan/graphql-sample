import React from 'react'
import { render } from 'react-dom'
import Provider from 'components/Provider'
import Requests from 'components/Request';

render(
  <Provider>
    <Requests />
  </Provider>, document.querySelector('#root')
)
