import { useEffect, useState } from "react";

export default  function User(){
       const [users,setUsers] =  useState([]);
    //useEffesct with call bacek and dependanci array
      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=> setUsers(data))
      },
     [] );
  

      return(
         <>
            <div>
                 <h3>user:{users.length}</h3>
            </div>
         </>
      );
};
