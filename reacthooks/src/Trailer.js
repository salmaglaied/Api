import React,{useState} from 'react'

const Trailer = ({movies,match}) =>{

    return(
        <div>
          {movies.find(el=>el.id===parseInt(match.params.id)).description}
        <br></br>
        <br></br>
        <iframe width="560" height="315" src={movies.find(el=>el.id===parseInt(match.params.id)).trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
          
    
        
      </div>
    );
    
}
export default Trailer