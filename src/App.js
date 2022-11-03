import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import DataCount from "./components/DataCount"
import DataList from "./components/DataList"
import DateAction from "./components/DateAction"
import AddData from "./components/AddData"
import {person} from "./data"


function App() {
  const [personData, setPersonDate] = useState(person)
  useEffect(() => {
    setPersonDate([])
  }, [])
  const onDelete = _=>{
    setPersonDate([])
  }
  const onShow = _=>{
    setPersonDate(person)
  }
  const onAdd = (name, time) =>{
    const id = person[person.length -1].id +1
    person.push({id, name, date:time, img:'avatar.jpg'})
    setPersonDate(person)
  }
  return (
    <div className="color-body">
      <Container className="py-5">
        <DataCount person={personData}/>
        <AddData onAdd={onAdd}/>
        <DataList  person={personData}/>
        <DateAction onDelete={onDelete} onShow={onShow}/>
      </Container>
    </div>
  );
}

export default App;
