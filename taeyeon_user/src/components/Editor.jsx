import { useRef, useState } from "react";

function Editor({ onCreate }) {
    const [state, setState] = useState({
        name: "",
        email: "",
    });
    const nameInputRef = useRef();
    const emailInputRef = useRef();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.name === "") {
            nameInputRef.current.focus();
            return;
        }
        if (state.email === "") {
            emailInputRef.current.focus();
            return;
        }
        onCreate(state.name, state.email);
        setState({
            name: "",
            email: "",
        });
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="Editor">
            <input ref={nameInputRef} name="name" value={state.name} onChange={handleChange} onKeyDown={onKeyDown} placeholder="User Name" />
            <input ref={emailInputRef} name="email" value={state.email} onChange={handleChange} onKeyDown={onKeyDown} placeholder="User Email" />
            <button onClick={handleSubmit}>추가</button>
        </div>
    )
}

export default Editor;