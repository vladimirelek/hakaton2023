import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Pages/NavBar/navbar";
import Home from "./Pages/Home/home";
import Login from "./Pages/Authentication/auth";
import HomeLoggedIn from "./Pages/Home-logged-in/home-logged-in";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home-logged-in" element={<HomeLoggedIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
