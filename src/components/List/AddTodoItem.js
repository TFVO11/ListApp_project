import React, { useRef } from "react";
import { useState } from "react";

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddTodoItem.module.css";

const AddTodoItem = (props) => {
    const [addingTodoItem, setAddingTodoItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodoItem(addingTodoItem);
        setAddingTodoItem("");
    };

    const handleChangeInput = (event) => {
        setAddingTodoItem(event.target.value);
    };

    return (
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label>Enter List</label>
                    <input
                        onChange={handleChangeInput}
                        value={addingTodoItem}
                    ></input>
                    <Button type="submit">ADD</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddTodoItem;
