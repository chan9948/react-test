import React, { useState, useEffect } from 'react';
import './index.css';
import useTimeHook from '../../Hook/useTimeHook';


const LoadingBar = (props) => {
    const percent = useTimeHook(props.value)
    return (
        <div className='loadingBar'>
            <div className="progress" style={{ width: percent <= 100 ? percent + '%' : "100%" }}/>
        </div>
    );
};

export default LoadingBar;
