import React, { useState, useEffect, useRef } from 'react';
import Test2 from './Test2';

function Test() {
    const refreshCount = useRef(0);
    useEffect(() => {
        //mount
        console.log("Test mounted");
        refreshCount.current = refreshCount.current + 1;
        console.log("refresh count: " + refreshCount.current);
        return () => {
            //dismount
            console.log("Test dismounted");
        };
    });
    return ( 
        <Test2  />
    )
}

export default Test;