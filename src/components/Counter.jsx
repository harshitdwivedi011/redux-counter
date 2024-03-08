import { useState } from 'react';
import { increment, decrement, reset, incrementByAmount } from '../redux/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [isDisplay, setIsDisplay] = useState(false);
    return (
        <div>
            <h2 style={{ 'paddingLeft': '1rem' }}>Counter is: {counter}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button className='decrement' onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => setIsDisplay(!isDisplay)}>IncrmentByAmount</button>
            {isDisplay ? <>
                <input className='enterValue' type='number' placeholder='Enter Amount' />
                <button onClick={() => { dispatch(incrementByAmount(document.querySelector('.enterValue').value)); }}>Enter</button>
            </> : ""}

            {/* {
                Isnote ? <h4>NOTE: Counter should be greater than 0 to perform Decrement.</h4> : ""
            } */}
        </div >
    )
}

export default Counter;
