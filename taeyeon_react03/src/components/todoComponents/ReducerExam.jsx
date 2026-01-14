import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

export default function ReducerExam() {
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        dispatch({type: "INCREASE", data: 1});
    }

    const onClickMinus = () => {
        dispatch({type: "DECREASE", data: 1});
    }

    return (
        <>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
        </>
    );
}