import { useState } from "react";
import TodoItem from "./TodoItem";

function List({todo, onDelete, onUpdate}) {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    
    const getFilteredData = () => {
        if(search === ""){
            return todo;
        }
        return todo.filter((item) =>
            item.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    return(
        <div className="List">
            <h4>Todo List</h4>
            <input onChange={onChangeSearch} value={search} placeholder="검색어를 입력하세요" />

            {getFilteredData().map((item) => {
                return (
                    <TodoItem key={item.id} {...item} onDelete={onDelete} onUpdate={onUpdate}/>
                );
            })}
        </div>
    )
}






export default List;