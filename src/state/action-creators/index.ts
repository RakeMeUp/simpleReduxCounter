import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const depositMoney = (amount: number)=>{
    //ts wont catch 'amount' type errors so we explicitly declate
    //the Dispatch type
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number)=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankruptMoney = ()=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}