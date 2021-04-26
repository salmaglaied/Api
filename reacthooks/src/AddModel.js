import {Modal,Button} from 'react-bootstrap'
import React,{ useState }  from 'react'

const AddModel=({handleMovieAdd,handleClose})=>{
    const [newMovie, setNewMovie] = useState({
        title:"",
        image:'',
        description:'',
        rating:""
    })
    const handleChange = (e)=>{
        setNewMovie({
            ...newMovie,[e.target.name]:e.target.value
        })}
    const handleSave =()=>{
        handleMovieAdd(newMovie)
        setNewMovie({
            title:"",
            image:'',
            description:'',
            rating:"" 
        })}
   
  return(
      <div>
     <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Movie App</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <input name="title" type="text" value={newMovie.title} placeholder="MovieTitle" onChange={handleChange}></input>
    <input name="image" type="text" value={newMovie.image} placeholder="MovieUrl" onChange={handleChange}></input>
    <input name="description" type="text" value={newMovie.description} placeholder="description"  onChange={handleChange}></input>
    <input name="rating" type="text" value={newMovie.rating}placeholder="rating" onChange={handleChange}></input>
  </Modal.Body>

  <Modal.Footer>
  <Button onClick={handleSave} >AddMovie</Button>
    <Button variant="secondary" onClick={handleClose}>close</Button>
    
  </Modal.Footer>
</Modal.Dialog>
      </div>
  ) 
   
}

export default AddModel