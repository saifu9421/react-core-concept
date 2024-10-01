
import './App.css'
  import Counter from './countar';
  import Team from './team';
   import User from './user';
    import Friend from './friends';
     import FriendsData from './FriendsData';

function App() {
   function handleClick(){
     alert("Button Click");
   };
    const handleClick2 = ()=>{
       alert("Button 2 click");
    };
 const addToFive = (num)=>{
     alert(num+5);
 };
  
  return (
    <>
     <FriendsData></FriendsData>

     <Friend></Friend>
       <User></User>
      {/* <h3>react core concepts2 </h3>
       <button onClick={handleClick}>Click Me</button> <br /> <br />
        <button onClick={handleClick2}>
          click2
        </button> <br />
        <button onClick={()=>{addToFive(3)}}>Add to five</button> */}
       <Counter></Counter>
       <br />
       <Team></Team>
      
    </>
  )
}

export default App
