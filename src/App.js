// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { connect } from "react-redux";
import { buycake} from "./redux/cake/action";
import { buyIcecream } from "./redux/iceCream/action";
import { fetchUsers } from "./redux/fetchedUsers/action";



function App(props) {
  useEffect(() => {
    props.fetchUsers();
  },[])

  return (
    <div className="App">
      <h1>Number Of Cakes: {props.numOfCakes}</h1>
      <button onClick={props.buycake}>BUY CAKE</button>
      <h1>Number Of Icecreams: {props.numOfIcecreams}</h1>
      <button onClick ={props.buyIcecream}>BUY ICE CREAMS</button> 
      <h1>Display Users Names Using JSON Placeholder:</h1>
       {
        props.name.map((user,index)=>{
          return <ul key={index}><li>{user.name}</li></ul>
        })
       }
     
    </div>
  );
}
const mapStateToProps = state =>{
  return {
   
   numOfCakes:  state.cakeReducer.numOfCakes,
    numOfIcecreams:  state.iceCreamReducer.numOfIcecreams,
    name:  state.userReducer.user
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buycake: ()=> dispatch(buycake()),
    buyIcecream:()=> dispatch(buyIcecream()),
    fetchUsers: ()=> dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);


