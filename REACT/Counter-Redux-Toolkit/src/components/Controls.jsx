import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";


const Controls = () =>{
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () =>{
    dispatch(counterAction.increment());
  };
  const handleDecrement = () =>{
    dispatch(counterAction.decrement());
  };
  const handleAddition = () =>{
    dispatch(counterAction.addition(inputElement.current.value),
    inputElement.current.value = ""
    )};
  const handleSubraction = () =>{
    dispatch(counterAction.subraction(inputElement.current.value),
    inputElement.current.value = ""
    )};
  const handlePrivacyToggle = () =>{
    dispatch(privacyAction.toggle())
  };



  return (
    <>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
              INCREMENT
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>
              DECREMENT
            </button>
            <button type="button" class="btn btn-danger" onClick={handlePrivacyToggle}>Privacy Toggle</button>

          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center second-row">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={handleAddition}>
              Addition
            </button>
            <input type="text"  placeholder="enter number" ref={inputElement}/>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={handleSubraction}>
              Subraction
            </button>
          </div>  
    </>
  );
}

export default Controls;