import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";


export default function App() {
    
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  
  return(
<div>{data.map((user) => (
          
          <UserCard
          user={user}
          key={user.id} 
          />
        ))}</div>
  ) 
}