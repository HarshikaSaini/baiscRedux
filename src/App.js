import {useSelector,useDispatch} from "react-redux";
import {Increment, Decrement} from "./Actions/Counter";


function App() {
const count = useSelector(state =>state.countReducer);
const log = useSelector(state =>state.logReducer);
const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h4> Count : {count} </h4>
      <button onClick={() => dispatch(Increment())}>Add</button>
      <button onClick={()=> dispatch(Decrement())}>Subtract</button>
      {log? <p>Logged In</p> : <p>Logged Out</p>}
    </div>
  );
}

export default App;
