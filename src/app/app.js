


import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import PrivateRoute from "../privateRoute";

import {Navigate} from "react-router";
import DashBoard from "../pages/dashBoard";
import Login from "../pages/login";

import ProductManage from "../pages/productManage";
import Test from "../test";



function App() {
  const [isLogged,setIsLogged]=useState(false)
  const [token,setToken]=useState(true)
  const [duration,setDuration]=useState(3000)

    let power=3000;
  const changeState=() =>{
    setIsLogged(true)
  }


  return (
      <Router>
        <Routes>
          <Route element={<PrivateRoute  isLogged={isLogged}/>}>
              <Route path="/dashBoard" element={<DashBoard/>}/>
               <Route path="/product" element={<ProductManage/>}/>
          </Route>
            <Route path="/" element={<Login setLogged={changeState}/>}/>

        </Routes>
      </Router>
         /* <Router>

            <Routes>
                <Route element={<PrivateRoute isLogged={isLogged}/>}>
                    <Route path="/dashBoard" element={<DashBoard/>} />
                </Route>
                <Route path="/" element={<Login setLogged={changeState}/>}/>

            </Routes>

          </Router>*/

  );
}

export default App;
