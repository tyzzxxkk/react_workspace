import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setSeconds((prev) => prev+1);
            return () => {clearInterval(intervalVar);};
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    },[]);

    return (
        <>
        <h1>타이머: {seconds}초</h1>
        </>
    );
}

export default Timer;