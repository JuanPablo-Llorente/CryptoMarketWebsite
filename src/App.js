// Dependencies
import React from "react";
import {Route, Routes} from "react-router-dom";
// Files
import Home from "./components/Home/Home";
import "./App.css";


function App()
{
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </React.Fragment>
    );
};


export default App;