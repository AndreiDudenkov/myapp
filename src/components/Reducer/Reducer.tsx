import React, {useReducer} from 'react';
import {RatingForMemo} from '../Rating/Rating';

export type ActionType = {
    type: string
}
export const DEPLOYED_CHANGE = 'DEPLOYED-CHANGE'

export type StateType = {
    deployed: boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type){
        case DEPLOYED_CHANGE:
            return {
                ...state,
                deployed: !state.deployed
            }
        default:
            throw new Error ('wrong action type')
    }
    return state
}

