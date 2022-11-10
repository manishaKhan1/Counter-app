import React from 'react'
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a className="quantity__minus" title="Decrement"> <button onClick={() => dispatch(decNumber())}>-</button> </a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a className="quantity__plus" title="Increment" >
          <button onClick={() => dispatch(incNumber(5))}>+</button></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App
