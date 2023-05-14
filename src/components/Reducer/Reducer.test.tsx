import {DEPLOYED_CHANGE, reducer, StateType} from './Reducer';

test ('reducer should change value to opposite', ()=>{
    const state: StateType={
        deployed: true
    }
    const newState = reducer(state, {type: DEPLOYED_CHANGE})
    expect(newState.deployed).toBe(false)
})
test ('reducer error', ()=>{
    const state: StateType={
        deployed: true
    }

    expect(()=> reducer(state, {type: 'WrongType'})).toThrowError()
})
