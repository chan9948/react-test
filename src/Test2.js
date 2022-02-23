import React, { useState, useRef } from 'react';
// import LoadingBar from './LoadingBar';

export default function Test2() {
    const [count, setCount] = useState(0);
    const refreshCount = useRef(0);
    console.log();
    return (
        <div>
            <div>
                {/* <div>{count}</div>
                <button onClick={() => {
                    setCount(count + 15);
                    refreshCount.current = refreshCount.current + 1;
                    console.log("ref" + refreshCount.current);
                }} >click</button>
                <LoadingBar value={count} /> */}
            </div>
        </div>
    );
}
