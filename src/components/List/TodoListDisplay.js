import React from 'react';

import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";

const TodoListDisplay = (props) => {

    return (
        <Wrapper>
            <Card>
                <ul>
                    {props.todoList && props.todoList.map((todoItem) => (
                        <li onClick={props.onRemove} >{todoItem.label}</li>
                    ))}
                </ul>
            </Card>
        </Wrapper>
    );
};

export default TodoListDisplay;
