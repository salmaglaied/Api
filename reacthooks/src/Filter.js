import React,{useRef} from "react";

const Filter=({handleChangeterm,searchTerm})=>{
const inputEL=useRef("");
const getsearchTerm=()=>{
    
    handleChangeterm(inputEL.current.value)}

return(
    <div className="search">
        <input ref={inputEL} type="text" placeholder="search" value={searchTerm} onChange={getsearchTerm} className="search1"></input>

    </div>

)}
export default Filter