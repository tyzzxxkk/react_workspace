import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [isTimer, setTimer] = useState(false);
  const isMount = useRef(false);

  useEffect(() => {
    if (isMount.current === false) {
      console.log("마운트");
      isMount.current = true;
      return;
    }
    console.log("useEffect 업데이트");
  }, [count]);

  const onClickButton = (num) => {
    setCount(count + num);
  };

  return (
    <>
      <div>
        <button onClick={() => setTimer(!isTimer)}>
          타이머 {isTimer ? "중지" : "시작"} 
          </button>
          {isTimer && <Timer />}
      </div>
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
