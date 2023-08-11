import React from 'react';
import classes from './TodoItem.module.css'
import Card from './ui/Card';
import Button from './ui/Button';



const TodoItem = (props) => {

    const deleteHendler = (e) =>{
        props.setTodos(props.todos.filter((el) => el.id !== e.target.value));
       };
        
       const checkboxChange = (e) =>{
           props.setTodos(
               props.todos.map((el) => {
                   if(el.id === e.target.id) {
                   el.complated = !el.complated
                   }
                  return el
               })
           )        
       };
     console.log(props.todos);
   
       return (
           <Card className={classes.users}>
              <ul>
               <li className={props.complated ? classes.done : ''}>
                   <h4>{props.name}</h4>
                   <h4>{props.date}</h4>
                   <input id={props.id} type="checkbox" onChange={checkboxChange} />
                   <Button onClick={deleteHendler} id={props.id}>delete</Button>
               </li>
               </ul> 
           </Card>
       );


}

export default TodoItem