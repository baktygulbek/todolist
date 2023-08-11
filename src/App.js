import React,{useState} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {

  const [todos,setTodos] = useState([])

  const seveTodo = (name,date) =>{
   setTodos([
    ...todos,{ name,date, complated:false, id:Math.random().toString()}
   ])
  }
  return (
    <div>
      <AddTodo  onSave={seveTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;