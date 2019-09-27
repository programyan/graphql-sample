import { HttpLink } from 'apollo-link-http';

export const httpLink = () => new HttpLink({
  uri: '/graphql',
  credentials: 'include',
})