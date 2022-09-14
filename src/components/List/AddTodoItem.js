import React, { useRef } from "react";
import { useState } from "react";

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";

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
            <Card>
                <form className={input} onSubmit={handleSubmit}>
                    <label>Enter List</label>
                    <input
                        onChange={handleChangeInput}
                        value={addingTodoItem}
                    ></input>
                    <Button type="submit">Add</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddTodoItem;
