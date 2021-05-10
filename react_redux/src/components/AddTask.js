import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import  { useState } from 'react';
import { addTodo } from './Redux/Actions';
import { useDispatch } from 'react-redux';
import {v1 as uuid} from 'uuid';


export default function AddTask() {
    let [name, setName] = useState();
    let [done, setDone] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <Container>
  <Row>
    <Col><input value={name} onChange={(e)=>setName(e.target.value)} type="text" ></input>
    <input value={done} onChange={(e)=>setDone(e.target.value)} type="text" ></input>
    <Button variant="info"  onClick={()=>{dispatch(  addTodo({id: uuid(),name: name,done:done}));setName('');setDone('');}}>Add</Button>
    </Col>
    
    
    </Row>
    </Container>
        </div>
    )
}
