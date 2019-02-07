pragma solidity ^0.5.0;

contract Events {
  constructor() public {

  }

  event LogEvent(
    string  _name
  );

  function trigger(string memory name) public {
    emit LogEvent(name);
  }
}
