pragma solidity ^0.4.24;

contract Events {
  constructor() public {

  }

  event LogEvent(
    string  _name
  );

  function trigger(string name) public {
    emit LogEvent(name);
  }
}
