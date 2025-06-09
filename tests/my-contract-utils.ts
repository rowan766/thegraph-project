import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Deposit,
  fallbackCalled,
  receivedCalled
} from "../generated/MyContract/MyContract"

export function createDepositEvent(
  Sender: Address,
  Value: BigInt,
  timestamp: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("Sender", ethereum.Value.fromAddress(Sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("Value", ethereum.Value.fromUnsignedBigInt(Value))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return depositEvent
}

export function createfallbackCalledEvent(
  Sender: Address,
  Value: BigInt,
  Data: Bytes
): fallbackCalled {
  let fallbackCalledEvent = changetype<fallbackCalled>(newMockEvent())

  fallbackCalledEvent.parameters = new Array()

  fallbackCalledEvent.parameters.push(
    new ethereum.EventParam("Sender", ethereum.Value.fromAddress(Sender))
  )
  fallbackCalledEvent.parameters.push(
    new ethereum.EventParam("Value", ethereum.Value.fromUnsignedBigInt(Value))
  )
  fallbackCalledEvent.parameters.push(
    new ethereum.EventParam("Data", ethereum.Value.fromBytes(Data))
  )

  return fallbackCalledEvent
}

export function createreceivedCalledEvent(
  Sender: Address,
  Value: BigInt
): receivedCalled {
  let receivedCalledEvent = changetype<receivedCalled>(newMockEvent())

  receivedCalledEvent.parameters = new Array()

  receivedCalledEvent.parameters.push(
    new ethereum.EventParam("Sender", ethereum.Value.fromAddress(Sender))
  )
  receivedCalledEvent.parameters.push(
    new ethereum.EventParam("Value", ethereum.Value.fromUnsignedBigInt(Value))
  )

  return receivedCalledEvent
}
