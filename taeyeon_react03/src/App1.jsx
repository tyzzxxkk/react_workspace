import { Routes, Route } from "react-router-dom";
import Userlist from "./components/Userlist"
import Timer from "./components/Timer"
import Home from "./components/Home"
import TimerPage from "./pages/TimerPage";
import Navi from "./components/common/navi";
import SimpleCounterPage from "./pages/SimpleCounterPage";

function App() {

    return (
        <>
        <Navi />
        <Routes>
            <Route path="/" element={<Userlist/>}/>
            <Route path="/usermenu" element={<Userlist/>}/>
            <Route path="/timermenu" element={<TimerPage/>}/>
            <Route path="/simplecountermenu" element={<SimpleCounterPage/>}/>
        </Routes>
        </>
    )  
}

export default App;