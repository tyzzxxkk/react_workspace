import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./pages/MovieDetail";
import "./css/App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
