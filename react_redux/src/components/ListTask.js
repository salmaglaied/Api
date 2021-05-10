import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from './Redux/Actions';
import Button from 'react-bootstrap/Button'
export default function ListTask() {
    let dispatch = useDispatch();
    let todos = useSelector(state=>state);
    
    return (
        <div>
{todos.map((todo)=>   {
                return <Task key={todos.id}  todo={todo} />;
            })}
            <br></br>
            <br></br>

<Button variant="outline-success" onClick={() =>  {todos.map((todo)=>  {  if (todo.done==="Not Yet") {dispatch(deleteTodo(todo.id))} })}}>Done</Button>

<Button variant="outline-warning" onClick={() =>  {todos.map((todo)=>  {  if (todo.done==="Done") {dispatch(deleteTodo(todo.id))} })}}>Not Done</Button>
        </div>
    )
}
