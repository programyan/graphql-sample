export { createCache } from './cache'

import { ApolloClient } from 'apollo-client';
import { link } from './link'

export const createClient = (cache, requestLink) => new ApolloClient({ link, cache })

