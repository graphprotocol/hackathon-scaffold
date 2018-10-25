import {
  TypedMap,
  Entity,
  Value,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Event extends Entity {
  get id(): string {
    let value = this.get("id");
    if (value === null) {
      return null;
    } else {
      return value.toString() as string;
    }
  }

  set id(value: string) {
    if (value === null) {
      this.unset("id");
    } else {
      this.set("id", Value.fromString(value as string));
    }
  }
}
