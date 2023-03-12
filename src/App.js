import Login from "./components/Login/Login";
import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";

function App() {
  return (
      <div>
          <header>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>

              <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="true"></script>

              <script
                  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                  crossOrigin="true"></script>

              <script
                  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                  crossOrigin="true"></script>

              <script>var Alert = ReactBootstrap.Alert;</script>


              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossOrigin="anonymous"
              />

            </header>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </div>
  );
}

export default App;
