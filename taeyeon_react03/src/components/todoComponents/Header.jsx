import { useState, useEffect } from "react"
import "./header.css"

function Header() {
    const [dateVar, setDateVar] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateVar(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className="Header"> 
        <h1>Todo List 앱</h1>
        <h3>오늘은 📆 : {dateVar}</h3>
        </div>
    )
}

export default Header;