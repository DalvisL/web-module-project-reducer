import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import './App.css';
import { applyNumber, changeOperation, clearDisplay, setMemory, applyMemory } from '../actions';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (num) => {
    dispatch(applyNumber(num));
  }
  const handleOperationChange = (operator) => {
    dispatch(changeOperation(operator));
  }
  const clearClickHandler = () => {
    dispatch(clearDisplay());
  }
  const setMemoryClickHandler = (memory) => {
    dispatch(setMemory(memory));
  }
  const applyMemoryClickHandler = () => {
    dispatch(applyMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => setMemoryClickHandler(state.total)} value={"M+"}/>
              <CalcButton onClick={() => applyMemoryClickHandler()} value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => clickHandler(1)} value={1}/>
              <CalcButton onClick={() => clickHandler(2)} value={2}/>
              <CalcButton onClick={() => clickHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => clickHandler(4)} value={4}/>
              <CalcButton onClick={() => clickHandler(5)} value={5}/>
              <CalcButton onClick={() => clickHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => clickHandler(7)} value={7}/>
              <CalcButton onClick={() => clickHandler(8)} value={8}/>
              <CalcButton onClick={() => clickHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperationChange('+')} value={"+"}/>
              <CalcButton onClick={() => handleOperationChange('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperationChange('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clearClickHandler()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
