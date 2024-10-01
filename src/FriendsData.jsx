
export default function FriendsData({friend}){
      const {name,email} = friend || {};
      // const { name = "Unknown", email = "No email available" } = friend || {};
       console.log(friend);
       return(
         <>
              <div style={{border:'2px solid yellow '}}>
              <h4>name:{name}</h4>
              <p>email:{email}</p>
              </div>
         </>
       );
};
