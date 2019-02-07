import 'allocator/arena'

import { Entity, store } from '@graphprotocol/graph-ts'
import { LogEvent } from '../types/Events/Events'

export function handleEvent(event: LogEvent): void {
  let eventEntity = new Entity()
  let eventID = event.params._name

  store.set('Event', eventID, eventEntity)
}
