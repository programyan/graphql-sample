import React from 'react';
import { Query } from 'react-apollo';
import { Load } from 'queries/Request'
import Request from './request'

export default class Requests extends React.Component {
  render() {
    return (
      <Query query={Load}>
        {({ data, loading }) => (
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Details</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {loading ? 'loading' : data.requests.map((request) => (
                  <Request key={request.id} request={request}/>))}
            </tbody>
          </table>
        )}
      </Query>
    )
  }
}
