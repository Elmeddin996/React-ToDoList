import React from 'react';
import TodoItem from './TodoItem';
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className='container'>
      <p>To Do List</p>
      <div className='todolist'>
      <div>
      <input placeholder='Enter To Do' onChange={handleChange} type="text" />
      <button className='btn btn-primary' onClick={handleAddMethod}>Add To Do</button>
      </div>
       <div className='item'>
       {
         currentList.length>0? currentList.map(({id,task}) => (
          <div className='todo'>
          <TodoItem task= {task}/>
          <button className='btn btn-primary' onClick={() => deleteHandler(id)}>Delete</button>
          </div>
        )):<div className="alert alert-danger" role="alert">Task Yoxdur</div>
        }
       </div>
    </div>

    </div>
    
    
  );
};

export default ToDoList;
