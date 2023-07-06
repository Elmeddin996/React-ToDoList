import React from 'react';
import TodoItem from './TodoItem';

const ToDoList = () => {
  
  const [arr,setArray] = React.useState([])
  const [currentList,setCurrentList] = React.useState(arr)
  const [taskId,setTaskId] = React.useState(0)
  const [inputValue,setInputValue] = React.useState({})

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }


  const handleAddMethod = () => {
    setTaskId(taskId+1)
    setCurrentList([...currentList,{
      id:taskId,
      task:inputValue

    }])
  }

  const deleteHandler =(id)=>{
    setCurrentList( currentList.filter(x => x.id !== id))
  }
  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button onClick={handleAddMethod}>Add To Do</button>
        {currentList.map(({id,task}) => (
          <div>
          <TodoItem task= {task}/>
          <button onClick={() => deleteHandler(id)}>Delete</button>
          </div>
          
        ))}
    </div>
  );
};

export default ToDoList;
