import {
  Deposit as DepositEvent,
  fallbackCalled as fallbackCalledEvent,
  receivedCalled as receivedCalledEvent
} from "../generated/MyContract/MyContract"
import { Deposit, fallbackCalled, receivedCalled } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Sender = event.params.Sender
  entity.Value = event.params.Value
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefallbackCalled(event: fallbackCalledEvent): void {
  let entity = new fallbackCalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Sender = event.params.Sender
  entity.Value = event.params.Value
  entity.Data = event.params.Data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlereceivedCalled(event: receivedCalledEvent): void {
  let entity = new receivedCalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Sender = event.params.Sender
  entity.Value = event.params.Value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
