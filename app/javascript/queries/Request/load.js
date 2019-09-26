import gql from 'graphql-tag';
import { RequestFragment } from 'queries/fragments'

export const Load = gql`
  {
    requests {
      ...RequestFragment
    }
  }
  ${RequestFragment}
`
