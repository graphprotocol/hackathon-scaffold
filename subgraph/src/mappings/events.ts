import 'allocator/arena'
export { allocate_memory }

import { Entity, store } from '@graphprotocol/graph-ts'
import { LogEvent } from '../types/Events/Events'

export function handleEvent(event: LogEvent): void {
  let eventEntity = new Entity()
  let eventID = event.params._name

  eventEntity.setString('id', eventID)
  // eventEntity.setBytes('blockHash', event.blockHash)

  store.set('Event', eventID, eventEntity)
}
