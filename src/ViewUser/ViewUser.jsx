import React from 'react'
import { useParams } from 'react-router-dom';


function ViewUser() {
const {id} = useParams();
console.log(id);


  return (
    <div>
      <h1>ViewUser</h1>  
    </div>
  )
}

export default ViewUser