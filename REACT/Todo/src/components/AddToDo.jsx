import { useRef, useState } from 'react';
import styles from './AddToDo.module.css'
import { IoMdAdd } from "react-icons/io";

function AddToDo({onNewItem}){
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) =>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
        <form className="row kg-row" onSubmit={handleAddButton}>
          <div className="col-6">
            <input className={styles.input} type="text" placeholder="enter your task" ref={todoNameElement} />
          </div>
          <div className="col-4"><input className={styles.input} type="date" ref={todoDateElement} /></div>
          <div className="col-2">
            <button  className="btn btn-success kg-button"><IoMdAdd /></button>
          </div>
        </form>
    </div>
  );
}

export default AddToDo;