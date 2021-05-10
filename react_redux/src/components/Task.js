import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
  
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './Redux/Actions';


export default function Task({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let [done, setDone] = useState(todo.done);
    let dispatch = useDispatch();


    return (
        <div>
          <Container>
  <Row>
    <Col><div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div></Col>
    
    <Col><div> {editable ?
                        <input type="text" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}</div></Col>
  
        
   
    
       <Col> 
       <div> {editable ?
                        <input type="text" 
                            value={done}
                            onChange={(e) => {
                                setDone(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.done}</h4>}</div></Col>
  
    
    
    <Col><Button variant="success"  onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name,
                            done: done
                        }))
                        if(editable) {
                         setName(todo.name);  
                         setDone(todo.done) 
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"} </Button></Col>
    <Col><Button variant="warning" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button></Col>
  </Row>
  </Container>  
        </div>
    )
}
