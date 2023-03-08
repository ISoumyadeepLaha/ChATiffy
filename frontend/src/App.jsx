import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Pages/Chats";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
