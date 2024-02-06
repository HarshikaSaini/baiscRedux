import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { buycake } from "./redux/cake/action";
import { buyIcecream } from "./redux/iceCream/action";
function App( {numOfCakes,numOfIcecreams}) {
const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Number of cakes: {numOfCakes}</h1>
      <button onClick={()=> dispatch(buycake())}>BUY CAKE</button>
      <h1>Number of icecreams: {numOfIcecreams}</h1>
      <button onClick ={()=> dispatch(buyIcecream())}>BUY ICE CREAMS</button>
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    numOfCakes : state.cake.numOfCakes,
    numOfIcecreams:state.ice.numOfIcecreams
  }
}
export default connect(mapStateToProps)(App);


