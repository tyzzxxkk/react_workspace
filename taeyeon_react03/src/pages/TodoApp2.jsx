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

function stateReducer(state, action) {
    switch(action.type) {
        case "CREATE" :
            return [action.data, ...state];
        case "UPDATE" :
            return state.map((item) => 
                item.id === action.data.id ? { ...item, isDone: !item.isDone } : item
            );
        case "DELETE" :
            return state.filter((item) => item.id !== action.targetId);
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

export  default function TodoApp2() {
    let [todo, setTodo] = useState(stateReducermockDate);
    const idRef = useRef(3);
    
    const onCreate = (content) => {
        dispatch (
            {
                type: "CREATE",
                data: {
                    id: idRef.current++,
                    isDone: false,
                    content: content,
                    date: new Date().toLocaleDateString()
                }
            }
        )
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