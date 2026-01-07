import Tabs from "./components/Tabs";
import { useState } from "react";

function App() {

  let[count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  const btnClick = () => {
    setCount(count+1);
  };

  const btnClick2 = () => {
    setCount(count-1);
  };

  const likeClick = () => {
    setLike(like + 1);
  };

  return (
    <>
      <h1> useState() hook함수 예제(1) </h1>
      <div>
        <h1>{count}</h1>
        <button onClick={btnClick}>증가</button>
        <button onClick={btnClick2}>감소</button>
      </div>
      <div>
        <button onClick={likeClick}>👍 {like}</button>
      </div>
    </>
  )
}

export default App
