import ToDoItem from "./ToDoItem";
import styles from './ToDoList.module.css'

const ToDoList = ({toDoList, onClickButton}) =>{
  return (
      <div className= {styles.itemContainer}>
        {toDoList.map((item) => (<ToDoItem key={item.name} todoName={item.name} todoDate={item.date} onClickButton={onClickButton}></ToDoItem>))}
      </div>
  );
}

export default ToDoList;