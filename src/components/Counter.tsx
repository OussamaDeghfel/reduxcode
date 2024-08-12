import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, increment, incrementAsync, incrementByAmount, reset } from '../state/counter/counterSlice'

const Counter = () => {
    const num = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div>Counter: {num}
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>IncrementByAmount</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementAsync(10))}>incrementAsync</button>
    </div>    
    </div>
  )
}

export default Counter