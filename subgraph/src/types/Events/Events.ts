import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogEvent extends EthereumEvent {
  get params(): LogEventParams {
    return new LogEventParams(this);
  }
}

export class LogEventParams {
  _event: LogEvent;

  constructor(event: LogEvent) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Events extends SmartContract {
  static bind(address: Address): Events {
    return new Events("Events", address);
  }
}
