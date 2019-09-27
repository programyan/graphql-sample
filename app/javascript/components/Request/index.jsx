import React from 'react';
import { Query } from 'react-apollo';
import { Load, RequestSubscription } from 'queries/Request'
import Request from './request'

export default class Requests extends React.Component {
  subscribeToRequests = (subscribeToMore) => {
    subscribeToMore({
      document: RequestSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev

        const updatedRequest = subscriptionData.data.updateRequest

        // update requests array
        return
      }
    })
  }

  render() {
    return (
      <Query query={Load}>
        {({ data, loading, error, subscribeToMore }) => {
          this.subscribeToRequests(subscribeToMore)

          return (
            <table className="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Details</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {loading ? 'loading' : error ? 'error' : data.requests.map((request) => (
                    <Request key={request.id} request={request}/>))}
              </tbody>
            </table>
          )
        }}
      </Query>
    )
  }
}
