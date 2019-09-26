import gql from 'graphql-tag';

export const RequestFragment = gql`
  fragment RequestFragment on Request {
    id
    description
    details
    user {
      email
    }
  }
`
