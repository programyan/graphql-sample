import gql from 'graphql-tag'
import { RequestFragment } from 'queries/fragments'

export const Update = gql`
  mutation UpdateRequest(
    $id: String!,
    $description: String,
    $details: String,
    $email: String
  ),
  {
    updateRequest(id: $id, description: $description, details: $details, email: $email) {
      ...RequestFragment
    }
  }
  ${RequestFragment}
`
