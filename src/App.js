import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Alert from "./components/Alert";
// import { useState } from "react";

function App() {
  // const [, setAlert] = useState(null);
  // const showAlert = (message) => {
  //   setAlert({
  //     msg: message,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert alert={alert} /> */}
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
