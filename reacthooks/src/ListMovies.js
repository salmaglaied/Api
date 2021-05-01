import React,{useState} from 'react'
import { BrowserRouter, Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import Trailer from './Trailer'


const ListMovies = (props) =>{
  
    
    return (
        <div  className="listmovies">
            
            {props.movies.map(el=> <Card style={{ width: '18rem' }}>
         <BrowserRouter>
         <Link to={`/Trailer/${el.id}` } ><Card.Img variant="top"  src={el.image} /></Link>
         </BrowserRouter>
       
       <Card.Body>
       <Card.Title>{el.title}</Card.Title>
       <Card.Text>
       {el.description}
      </Card.Text>
      <StarRatingComponent value={el.rating} starCount={5}/>
    
        </Card.Body>
        </Card>)}
     </div>
    
            );  
            
};

export default ListMovies
