import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Event extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Event entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Event entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Event", id.toString(), this);
  }

  static load(id: string): Event | null {
    return store.get("Event", id) as Event | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
