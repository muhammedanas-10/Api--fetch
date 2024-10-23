import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Api() {
  const {id} = useParams();
console.log(id);
// 4 state creation for holding array of data
const[userData, setUserData] = useState([])
//1 define url
const baseurl = 'https://jsonplaceholder.typicode.com/users'

// 2 define Function
const ApiCall = async () => {
    const response = await fetch(baseurl)
    .then(res => res.json()) // convert json data to array
    .then(data => setUserData(data))  // array dara
}

    



// 3 create useEffect
useEffect(() => {
    ApiCall()
}, [])




  return (
    <div>

<div className='row'>
    {
        userData.map(item =>(
       <div className='col'>

<MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>
              {item.email}
              </MDBCardText>
              <MDBBtn>Details</MDBBtn>
            </MDBCardBody>
          </MDBCard>



       </div>

        ))
    }

</div>

    </div>
  )
}

export default Api