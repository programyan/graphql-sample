import { ApolloLink, Observable } from 'apollo-link';

const getToken = () => document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const token = getToken();

const setTokenForOperation = async operation =>
  operation.setContext({
    headers: {
      'X-CSRF-Token': token,
    },
  })

export const tokenLink = () =>
  new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle;
        Promise.resolve(operation)
          .then(setTokenForOperation)
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));
        return () => {
          if (handle) handle.unsubscribe()
        }
      })
  )
