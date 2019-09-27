import { ApolloLink } from 'apollo-link'
import { cableLink } from './cable'
import { errorLink } from './error'
import { httpLink } from './http'
import { tokenLink } from './token'

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription',
  )
}

export const link = ApolloLink.split(
  hasSubscriptionOperation,
  cableLink(),
  ApolloLink.from([
    errorLink(),
    tokenLink(),
    httpLink(),
  ])
)