import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Pages/NavBar/navbar";
import Home from "./Pages/Home/home";
import Login from "./Pages/Authentication/auth";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import Windows from "./Pages/windows/windows";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="windows" element={<Windows />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
