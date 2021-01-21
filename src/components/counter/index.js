import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementCounter} from '../actions/counter'


const Counter = () => {
    const counterState = useSelector(state => state.counter.counterValue)
    const dispatch = useDispatch()
    console.log('Counter -> counterState', counterState)
    return(
        <div><p>{counterState}</p>
        <div>
            <button onClick={() => null} >-</button>
            <button onClick={() => null}>+</button>
        </div>
        </div>
    )
}

export default Counter