import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Component/Create";
import Event from "./Component/Event";
import Home from "./Component/Home";

function App() {
  const [data,setData]=useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create setData={setData} />}></Route>
        <Route path="/event" element={<Event data={data} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
