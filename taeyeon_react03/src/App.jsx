import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

 useEffect(() => {
  if(!isMount.current){
    console.log("마운트");
    isMount.current = true;
    return;
  }
  console.log("useEffct 업데이트");
});

  const onClickButton = (num) => {
    setCount(count + num);
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {input}
      <div>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </div>
      <div>
        <Controller onClickButton={onClickButton} />
      </div>
    </>
  );
}

export default App;