import { useState } from "react";

export default function Counter(){


        // const  [count,setCount] =  useState(0);
         
        //    const handleAdd =  () =>{
        //            const newCount =  count+1;
        //             setCount(newCount);
        //    };
            
        //       const handleReduce = ()=>{
        //            const newCount = count -1;
        //               if(newCount == -1){
        //                  return;
        //               };
        //             setCount(newCount);
        //       }; 
         
                // function   useState(count){ 
                //        function setCount(value){
                //           count =  value;                        
                //        } ;
                //           return [count,setCount];                  
                // };
        
                const [count,setCount]  =  useState(0);

                    const  handleAdd =  ()=>{
                            const newCount = count+1; 
                             setCount(newCount);
                    };
                    const handleReduce =  ()=>{
                           const newValue =  count -1;
                           
                              if(newValue === -1){
                                  return;
                              };

                             setCount(newValue);
                    };
                     
     return(
         <>
           <div style={{border:'2px solid yellow'}}>
           <h3>Counter : {count} </h3>
             <button onClick={handleAdd}> Add </button> 
             <button onClick={handleReduce}> reduce</button>
           </div>
           </>
          
     );
      
}