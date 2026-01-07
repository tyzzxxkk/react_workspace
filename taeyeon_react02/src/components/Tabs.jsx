import { useState } from "react";

function Tabs() {

    const Tabs = () => {
        const [activeTab, setActiveTab] = useState("home");
    }

    return (
        <>
        <div style={{backgroundColor: "yellow"}}>
            <button onClick={() => setActiveTab("Home")}>Home</button>
            <button onClick={() => setActiveTab("About")}>About</button>
            {activeTab === "Home" && <p>Welcome Home!</p>}
            {activeTab === "About" && <p>About Us</p>}
        </div>
        </>
    );
}

export default Tabs;