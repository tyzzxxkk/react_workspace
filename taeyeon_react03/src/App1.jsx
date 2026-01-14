import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./components/Userlist";
import TimerPage from "./pages/TimerPage";
import Home from "./components/Home";
import Navi from "./components/common/Navi";
import SimpleCounterPage from "./pages/SimpleCounterPage";
import TodoApp from "./pages/TodoApp";
import ReducerExam from "./components/todoComponents/ReducerExam";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Navi />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usermenu" element={<Userlist />} />
      <Route path="/timermenu" element={<TimerPage />} />
      <Route path="/simplecountermenu" element={<SimpleCounterPage />} />
      <Route path="/todomenu" element={<TodoApp />} />
      <Route path="reducermenu" element={<ReducerExam />} />

      <Route path="/showItem/:id" element={<ShowItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;