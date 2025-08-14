import AppName from './components/AppName';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import WelcomeMessage from './components/WelcomeMessage'
import './App.css';
import { useState } from 'react';

function App() {

  const [toDoList, setToDoList] = useState([]);
  const handleNewItem = (itemName, itemDate) =>{
    const newItem = [...toDoList, {
      name: itemName,
      date: itemDate,
    } ];
    setToDoList(newItem);
  }

  const handleDeleteButton = (itemName) => {
    const newTodoItem = toDoList.filter(item => item.name !== itemName);
    setToDoList(newTodoItem);

  }

  return (
    <center>
      <AppName />
      <AddToDo onNewItem={handleNewItem}/>
      {toDoList.length === 0 && <WelcomeMessage/>}
      <ToDoList toDoList={toDoList} onClickButton={handleDeleteButton} ></ToDoList>
    </center>
  );
}
export default App;
