import { InMemoryCache } from 'apollo-cache-inmemory';

export const createCache = () => {
  const cache = new InMemoryCache();
  if (process.env.NODE_ENV === 'development') {
    window.secretVariableToStoreCache = cache;
  }
  return cache;
};

