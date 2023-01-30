import React, {useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)

    function increment(e) {
        e.preventDefault()
        setCount(count + 1)
    }

    function decrement(e) {
        e.preventDefault()
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="product__count">
            <button type="button" onClick={decrement}>-</button>
            <p>{count}</p>
            <button type="button" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;