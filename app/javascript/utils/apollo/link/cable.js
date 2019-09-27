import ActionCable from 'actioncable'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'

const cable = ActionCable.createConsumer('ws://localhost:3000/cable')

export const cableLink = () => new ActionCableLink({ cable })