import React, { useState } from "react";
import AddTodoItem from "../../components/List/AddTodoItem";
import TodoListDisplay from "../../components/List/TodoListDisplay";

function TodoListHome() {
    /**
     *  [
     *     { label: "Learn React", isCompleted: false },
     *  ]
     */
    const [todoList, setTodoList] = useState();

    const handleAddTodoItem = (content) => {
        setTodoList((prevTodoList) => {
            return [...prevTodoList, { label: content, id: Math.random().toString() }];
        });
    };

    const handleDelete = id => { //삭제 기능 함수
        setTodoList(todoList.filter((item) => item.id !== id))
    };

    return (
        <div>
            <AddTodoItem onAddTodoItem={handleAddTodoItem} />
            <TodoListDisplay todoList={todoList} onRemove={handleDelete}/>
        </div>
        
    );
}

export default TodoListHome;
