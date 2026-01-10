import { useEffect, useState } from "react";

const Userlist = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((re)=>re.json())
        .then((data) => {
            setUsers(data); })
        .catch((err)=>console.log("데이터 로드 실패! :", err));
    }, []);

    return (
        <>
        <h2>사용자 목록</h2>
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.email})
            </li>
        ))}
        </ul>
        </>
    );
}

export default Userlist;