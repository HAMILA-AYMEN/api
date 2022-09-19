import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './UserCard.css'
import { AiFillPhone,AiOutlineMail} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md'


function Details() {
  const {id}=useParams()
  const [user, setuser] = useState(null);

  
  useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res)=>{
    setuser(res.data)
    

  })
  .catch((err)=>console.log(err))
  }, [id]);
return (
    <Card   style={{ width: '18rem' ,margin:'20px' ,display: "inline-grid"}}>
     <Card.Title >{user?.name}</Card.Title>
      <Card.Body>
       
        <Card.Text><span style={{fontSize:"25px"}}><AiFillPhone/></span>{user?.phone}</Card.Text>
        <Card.Text><span style={{fontSize:"25px"}}><AiOutlineMail/></span>{user?.email}</Card.Text>
        <Card.Text><span style={{fontSize:"25px"}}><MdLocationOn/></span> {user?.address.city}</Card.Text>
        
        </Card.Body>
      
    </Card>
    
  );
}

export default Details;
