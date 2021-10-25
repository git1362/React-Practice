import React, { useRef } from "react";

function Colorify()
{
    const colorMsg = useRef();
    const color = useRef();
    const submit = (e) =>
    {
        e.preventDefault();
        const colorMsgValue = colorMsg.current.value;
        const colorValue = color.current.value;
        alert(`${colorMsgValue} sounds like ${colorValue}`);
        colorMsg.current.value = "";
        color.current.value = "";
    }

    return (
        <form onSubmit={submit}>
            <input type="text" ref={colorMsg} placeholder="type color ..." />
            <input type="color" ref={color} />
            <button>Add</button>
        </form>
    )
}

export default Colorify;