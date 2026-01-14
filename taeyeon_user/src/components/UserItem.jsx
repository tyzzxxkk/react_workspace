import { useState, useRef } from 'react';

function UserItem({ id, name, email, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [localState, setLocalState] = useState({ name, email });
    const nameInputRef = useRef();

    const toggleIsEditing = () => setIsEditing(!isEditing);

    const handleQuitEdit = () => {
        setIsEditing(false);
        setLocalState({ name, email });
    };

    const handleEdit = () => {
        if (localState.name.length < 1) {
            nameInputRef.current.focus();
            return;
        }
        onUpdate(id, localState);
        toggleIsEditing();
    };
    
    const handleChange = (e) => {
        setLocalState({
            ...localState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="UserItem">
            {isEditing ? (
                <>
                    <input ref={nameInputRef} name="name" value={localState.name} onChange={handleChange} />
                    <input name="email" value={localState.email} onChange={handleChange} />
                    <button onClick={handleEdit}>저장</button>
                    <button onClick={handleQuitEdit}>취소</button>
                </>
            ) : (
                <>
                    <div className="info">
                        <span>이름: {name}</span>, <span>이메일: {email}</span>
                    </div>
                    <button onClick={toggleIsEditing}>수정</button>
                    <button onClick={() => onDelete(id)}>삭제</button>
                </>
            )}
        </div>
    );
}

export default UserItem;