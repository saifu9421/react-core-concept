import { useState } from "react";

export default  function Team (){
          const [count,setCount] =  useState(11);

           const handleAdd = () =>{
                const  newVlaue  =  count+1;
                 setCount(newVlaue);
           };

   const remove = ()=>{
        const newValue =  count-1;
          if(newValue === -1){
              return;
          };
          
         setCount(newValue);
   };
            
   return(
     <>
       <div style={{border:'2px solid purple',margin:'15px', borderRadius:'15px'}}>
         <h3>players:{count}</h3>
           <button onClick={handleAdd}>Add</button>
            <button onClick={remove}>remove</button>
       </div>
     </>
   );

};
 