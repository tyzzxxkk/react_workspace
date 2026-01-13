import "./TodoItem.css"

function TodoItem({id, isDone, content, date, onDelete, onUpdate}) {
    const onChangeDeleteButton= () => {
        onDelete(id);
    }

    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    return(
        <>
        <div className="TodoItem">
        <input type="checkbox" onChange={onChangeCheckBox}/>
        <div className="content">{content}</div>
        <div className="data">{date}</div>
        <button onClick={onChangeDeleteButton}>삭제</button>
        </div>
        </>
    )
}

export default TodoItem;