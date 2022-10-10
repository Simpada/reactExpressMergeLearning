import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <div>
          Username <input type={"text"} />
        </div>
        <div>
          Password <input type={"password"} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/*"} element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
