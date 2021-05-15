import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UserList = () => {
    const [listOFUSer,setulistOFUSer]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{console.log(res)
        setulistOFUSer(res.data)})
        .catch(err=>{console.log(err)})

    })
    return (
        <div>
            <ol>
                {
                listOFUSer.map(user=>(
                    <li key={user.id}>{user.name}</li> 
                  
                    
                 

                ))
                
                }
                
            </ol>
        </div>
    )
}

export default UserList
