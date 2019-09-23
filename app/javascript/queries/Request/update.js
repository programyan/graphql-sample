import gql from 'graphql-tag'

export const Update = gql`
  mutation UpdateRequest(
    $id: String!,
    $description: String,
    $details: String,
    $email: String
  ),
  {
    updateRequest(id: $id, description: $description, details: $details, email: $email) {
      id
      details
      description
      user { email }
    }
  }
`
