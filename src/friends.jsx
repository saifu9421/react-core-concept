import { useEffect, useState } from "react";
import FriendsData from "./FriendsData";

export default  function Friend(){
       const [friends,setFriends] = useState([]);
        
        useEffect(()=>{
               fetch('https://jsonplaceholder.typicode.com/users')
               .then(res=>res.json())
               .then(data=> setFriends(data))
        },[]);


     return (
       <>
        <h3>Friend Length: {friends.length}</h3>
        {friends.map(friend=> <FriendsData friend={friend}></FriendsData>)}

       </>    
     ) ;

}