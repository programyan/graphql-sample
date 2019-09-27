import gql from 'graphql-tag';
import { RequestFragment } from 'queries/fragments'

export const RequestSubscription = gql`
  subscription {
    updateRequest {
      ...RequestFragment
    }
  }
  ${RequestFragment}
`