import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from "./components/create.component";
import Search from "./components/search.component";
import Home from "./components/home.component";
import Edit from "./components/edit.component";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Binar</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"create"}>Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"search"}>Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="search" element={<Search />} />
            <Route path="edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}
export default App;