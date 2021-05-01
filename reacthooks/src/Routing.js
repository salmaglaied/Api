import React,{useState} from 'react'
import App from "./App"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Trailer from './Trailer'



const Routing=()=>{
    const [movies,setmovies]=useState([
        {id:1,
          title:"Ice Age",
        description:"Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths",
        image:"https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@.jpg",
        rating:2,
        trailer:"https://www.youtube.com/embed/s4PWGVtIZWA"
      },{
        id:2,
        title:"Aquaman",
        description:"Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
        image:"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@.jpg",
        rating:4,
        trailer:"https://www.youtube.com/embed/WDkg3h8PCVU"
      },
      {
        id:3,
        title:"The Lord Of The Rings",
        description:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        image:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
        rating:1,
        trailer:"https://www.youtube.com/embed/V75dMMIW2B4"
      },
    ]);

    return(
        <div>
            <BrowserRouter>
   <Switch>
  
   <Route exact path="/" component={App}></Route>
    <Route  exact path="/Trailer/:id" render={props=><Trailer{...props} movies={movies}></Trailer>}></Route>
    </Switch>
    </BrowserRouter>

        </div>
    )
}
 export default Routing