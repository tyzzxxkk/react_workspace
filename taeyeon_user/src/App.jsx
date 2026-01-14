import Editor from "./components/Editor"
import UserList from "./components/UserList"
import UserItem from "./components/UserItem"
import { useState, useRef, useReducer, useCallback } from "react";
 
const mockData = [
];

function reducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return [action.data, ...state];
      case 'UPDATE':
        return state.map((user) =>
          user.id === action.id ? { ...user, ...action.data } : user
        );
      case 'DELETE':
        return state.filter((user) => user.id !== action.id);
      default:
        return state;
    }
  }

  function App() {
    const [users, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(mockData.length);

    const onCreate = useCallback((name, email) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                name,
                email,
            },
        });
    }, []);

    const onUpdate = useCallback((id, data) => {
        dispatch({
            type: 'UPDATE',
            id,
            data,
        });
    }, []);

    const onDelete = useCallback((id) => {
        dispatch({ type: 'DELETE', id });
    }, []);

    return(
        <div className="App">
          <h1>사용자 관리 시스템</h1>
          <Editor onCreate={onCreate} />
            <UserList users={users} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App;