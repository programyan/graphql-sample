import gql from 'graphql-tag';

export const Load = gql`
  {
    requests {
      id
      description
      details
      user {
        email
      }
    }
  }
`
