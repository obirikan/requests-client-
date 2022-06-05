import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pages from "./components/Pages";
import {BrowserRouter,Route} from 'react-router-dom'
import Nav from "./components/Nav";

function App() {
  return (
  <div>

    <BrowserRouter>
       <Route path='/' component={Register} exact/>
       <Route path='/login' component={Login} exact/>
       <Route path='/main' component={Pages} exact/>
    </BrowserRouter>
  </div>
  );
}

export default App;
