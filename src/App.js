import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import About from "./pages/About";
import UserInfo from "./pages/UserInfo";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={AddEditUser} path="/addUser" />
          <Route component={AddEditUser} path="/editUser/:id" />
          <Route exact component={UserInfo} path="/userInfo/:id" />
          <Route component={About} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
