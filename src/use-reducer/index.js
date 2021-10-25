import React, { useReducer } from "react";

const initialState = {
    message: "hi"
}

function reducer(state, action)
{
    switch (action.type)
    {
        case "yell":
            return {
                message: `HEY!, I just said ${state.message}`
            };
        case "whisper":
            return {
                message: `excuse me I just said ${state.message}`
            };
        default:
            return {
                message: "default"
            };
    }

}

function VoiceRecoder()
{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>Message: {state.message}</p>
            <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
            <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
        </>
    )
}

export default VoiceRecoder;