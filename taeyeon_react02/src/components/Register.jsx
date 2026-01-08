import { useState } from "react";

function Register() {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    let count = 0;

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    countRef.current++;
    console.log("핸들러 호출: ", countRef.current);
    }

    const onSubmit = () => {
        if(input.name === "") {
            inputRef.current.focus();
        }
    }

    return (
        <>
        <h1>회원 가입</h1>
        <div>
            이름 : <input name="name" value={input.name} onChange={onChange}/>{input.name}
        </div>
        <div>
            생일 : <input type="date" name="birth" value={input.birth} onChange={onChange}/>{input.birth}
        </div>
        <div>
            국적 : 
            <select name="country" value={input.country} onChange={onChange}>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
        </div>
        <div>
            자기소개 : <textarea name="bio" value={input.bio} onChange={onChange}>{input.bio}</textarea>
        </div>
        </>
    )
}

export default Register;