import Header from "../components/todoComponents/Header";
import Editor from "../components/todoComponents/Editor";
import List from "../components/todoComponents/List";
import { useState, useRef } from "react";
 
const mockDate = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().toLocaleDateString()
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().toLocaleDateString()
    },
    {
        id: 2,
        isDone: false,
        content: "노래연습하기",
        date: new Date().toLocaleDateString()
    }
];

function TodoApp() {
    let [todo, setTodo] = useState(mockDate);
    const idRef = useRef(3);
    
    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().toLocaleDateString()
        };
        setTodo([newTodo, ...todo]);
        console.log(todo);
    };

    const onDelete = (targetId) => {
        setTodo(todo.filter((item) => item.id !== targetId));
    }
    
    const onUpdate = (targetId) => {
        setTodo (
            todo.map((item) => {
                return item.id === targetId ? {...item, isDone: !item.isDone} : item;
            })
        );
    };

    return(
        <div className="Todo">
            <Header />
            <Editor onCreate={onCreate}/>
            <List todo={todo} onDelete={onDelete} onUpdate={onUpdate}/>
        </div>
    )
}

export default TodoApp;