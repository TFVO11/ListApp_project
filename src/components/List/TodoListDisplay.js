import Card from "../UI/Card";

const TodoListDisplay = (props) => {
    return (
        <Card>
            <ul>
                {props.todoList.map((todoItem) => (
                    <li>{todoItem.label}</li>
                ))}
            </ul>
        </Card>
    );
};

export default TodoListDisplay;