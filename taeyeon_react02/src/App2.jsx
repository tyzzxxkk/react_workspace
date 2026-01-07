import { useState } from "react";

const Light = ({isOn}) => {
    return (
        <>
        {isOn === "ON" ? (
            <h1 style={{backgroundColor: "orange"}}>ON</h1>
        ) : (
            <h1 style={{backgroundColor: "gray"}}>OFF</h1>
        )}
        </>
    )
}

function App() {
   let [state, setState]=useState(0);
   const [bulb, setBulb] = useState("OFF");

   //console.log(stateVar);
   const btnClick = () => {
    setState(state+1);
   };

   const blubClick = () => {
    setBulb(bulb==="OFF"?"ON":"OFF");
   }
   
   return (
    <>
    <div>
        <h1>{state}</h1>
        <button onClick={btnClick}>+버튼</button>
    </div>

    <div>
        <Light isOn={bulb}/>
        <button onClick={blubClick}>끄기/켜기</button>
    </div>
    </>
   );

}

export default App;