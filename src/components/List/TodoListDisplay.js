import React from 'react';

import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import classes from "./TodoListDisplay.module.css"

const TodoListDisplay = (props) => {

    return (
        <Wrapper>
            <Card className={classes.List}>
                <ul>
                    {props.todoList && props.todoList.map((todoItem) => (
                        <li
                            key={todoItem.id}
                            onClick={() => props.onRemove(todoItem.id)} >
                            {todoItem.label}
                        </li>
                    ))}
                </ul>
            </Card>
        </Wrapper>
    );
};

export default TodoListDisplay;
