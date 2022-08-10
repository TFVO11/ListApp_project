import React, { useRef } from 'react';
import { useState } from 'react';

import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";



const AddList = () => {
    const inPut = useRef();
    const [addingList, setAddingList] = useState();

    const addingHandler = event => {
        event.preventDefault();
        setAddingList(inPut.current.value);
    };

    return (
        <Wrapper>
            <Card>
                <form onSubmit={addingHandler}>
                    <label>Enter List</label>
                    <input ref={inPut}></input>
                    <button onClick={onSubmit}>Add</button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddList;