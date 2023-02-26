import React, { useEffect, useRef, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const previousRef = useRef(count);

    useEffect(() => {
        previousRef.current = count;
    }, [count]);

    return (
        <div className="section-box">
            <h3>useRef Counter</h3>
            <h5>Description: </h5>
            <ul>
                <li> Click Increase button to increase count. </li>
                <li> Show previous number. </li>
            </ul>

            <h6>Technique: Use useRef to save previous number</h6>
            <p>previous: {`${previousRef.current}`}</p>
            <p>Current: {`${count}`}</p>
            <button onClick={() => setCount((count) => count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Counter;
