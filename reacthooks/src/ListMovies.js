import React,{useState} from 'react'

import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';


const ListMovies = (props) =>{
  
    
    return (
        <div  className="listmovies">
            
            {props.movies.map(el=> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
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
