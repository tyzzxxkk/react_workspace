import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalVar = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {};
  }, []);

  return <h1>타이머 : {seconds}초</h1>;
}

export default Timer;