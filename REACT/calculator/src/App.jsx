import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
