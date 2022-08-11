import React from "react";
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
            return [...prevTodoList, { label: content }];
        });
    };

    return (
        <div>
            <AddTodoItem onAddTodoItem={handleAddTodoItem} />
            <TodoListDisplay todoList={todoList} />
        </div>
    );
}

export default TodoListHome;
