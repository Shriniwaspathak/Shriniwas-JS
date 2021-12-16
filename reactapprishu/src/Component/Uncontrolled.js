import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
    const name = useRef(null);
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        let name1 = name.current.value;
        name1 === '' ? alert('PLease fill the name') : setShow(true);
    }

    return (
        <>
            <form action='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='name'>Enter Name</label>
                    <input type='text' ref={name} ></input>
                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? ` ${name.current.value}`:''}</p>
            <h1>Hi I am uncontrolled</h1>
            <div />
        </>
    )
}
export default Uncontrolled;