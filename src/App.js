import React, { useState } from 'react';
import AddList from './components/List/AddList';
import mainList from './components/List/mainList';

function App() {
const [addList, setAddList] = useState();


  const onAddHandler = cts => {
    setAddList((prevCts) => {
      return [...prevCts, {main: cts}]
    })
  };

  return (
    <React.Fragment>
      <AddList onAddList={onAddHandler}/>
      <mainList HasList={addList}/>
    </React.Fragment>
  );
}

export default App;
