import React, { useEffect, useState } from "react";



const UseEffect = () => {
    const [countn, setCount] = useState(0);
    useEffect(() => {
        document.title=`chats ${countn}`;
    });

   
    return (
        <div>
            <h1>{countn} </h1>
            <button className='btn' onClick={() => {
                setCount(countn + 1)
            }}>Click</button>
        </div>
    )
}

export default UseEffect;