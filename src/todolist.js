import { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    

    return (
        <div>
            <h1>할일 목록</h1>
            <input
                type="text"
                placeholder="새로운 할 일 입력"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            ></input>
            <button onClick={(e) => {
                setList([...list,todo])
            }}>추가</button>

            <ul>
                {
                    list.map((todo, i)=>{
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;