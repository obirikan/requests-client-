import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pages from "./components/Pages";
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Route path='/' component={Register} exact/>
       <Route path='/login' component={Login} exact/>
       <Route path='/main' component={Pages} exact/>
    </BrowserRouter>
  );
}

export default App;
