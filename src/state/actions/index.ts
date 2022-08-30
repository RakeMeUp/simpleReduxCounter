import { ActionType } from "../action-types"
export type Action = DepositAction | WithdrawAction | BankruptAction

interface DepositAction{
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction{
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction{
    type: ActionType.BANKRUPT
}