import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import Header from "./Header";
import Signup1 from "./Signup1";
import Chalequito from "./Chalequito";
import Footer from "./Footer";
import Iconowapp from "./Iconow-app";
import Main from "./main";
import Login from "./Login";
import Pastito from "./Pastito";
import Nodesarrollada from "./Nodesarrollada";
import Contacto from "./Contacto";
import Tienda from "./Tienda";
import Signupexitoso from "./Signupexitoso";



function App() {
  const[page,setPage] = useState("/main")
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Route exact path="/main">
              <Main></Main>
            </Route>
            <Route path="/Chalequito">
              <Chalequito></Chalequito>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Signup1">
              <Signup1></Signup1>
            </Route>
            <Route path="/Signupexitoso">
              <Signupexitoso></Signupexitoso>
            </Route>
            <Route path="/Nodesarrollada">
              <Nodesarrollada></Nodesarrollada>
            </Route>
            <Route path="/Contacto">
              <Contacto></Contacto>
            </Route>
            <Route path="/Tienda">
              <Tienda></Tienda>
            </Route>
            <Route path="/Adidog">
              <Nodesarrollada></Nodesarrollada>
            </Route>
            <Route path="/Berlin">
              <Nodesarrollada></Nodesarrollada>
            </Route>
            <Route path="/Chupetes">
              <Nodesarrollada></Nodesarrollada>
            </Route>
            <Route path="/Platos">
              <Nodesarrollada></Nodesarrollada>
            </Route>
          </Switch>
          <Iconowapp></Iconowapp>
          <Pastito></Pastito>
          <Footer></Footer>
        </header>
      </div>
    </Router>
  );
}

export default App;
