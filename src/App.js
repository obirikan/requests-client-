import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pages from "./components/Pages";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Nav from "./components/Nav";
import Sent from "./components/Sent";
import Res from "./components/Res";

function App() {
  const [status,setstatus]=useState(false)
  return (
  <div>

    <BrowserRouter>
    {status?<Nav/>:''}
    <Switch>
       <Route path='/' component={Register} exact/>
       <Route path='/sent' component={Sent} exact/>
       <Route path='/recieve' component={Res} exact/>
       <Route path='/login' component={Login} exact/>
       <Route path='/main' component={Pages} exact/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
