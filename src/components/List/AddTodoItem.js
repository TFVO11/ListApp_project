import React, { useRef } from "react";
import { useState } from "react";

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddTodoItem.module.css";

const AddTodoItem = (props) => {
    const [addingTodoItem, setAddingTodoItem] = useState("");

    const [error, setError] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodoItem(addingTodoItem);
        setAddingTodoItem("");
        if (addingTodoItem.trim().length === 0){
            setError({
                title: 'invalid input',
                messege: 'Please enter a valid name and age (non-empyt values)'
            });
            return;
        }
    };

    const handleError = () => {
        setError(null);
    };

    const handleChangeInput = (event) => {
        setAddingTodoItem(event.target.value);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                title={error.title}
                messege={error.message}
                onConfirm={handleError}
                />
            )}
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
