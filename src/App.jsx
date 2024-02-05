import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import './index.css'
import "./font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Homepage />}></Route>
      <Route path="/popular"  element={<Popular />}></Route>
      <Route path="/toprated"  element={<TopRated />}></Route>
      <Route path="/upcoming"  element={<Upcoming />}></Route>
    </Routes>
  </BrowserRouter>
  )
 
}
