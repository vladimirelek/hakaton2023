import { useState } from "react";
import "./signin.css";
import Home from "../../Pages/Home/home";
import SignUp from "../Signup/signup";
import HomeLoggedIn from "../../Pages/Home-logged-in/home-logged-in";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in form submitted with:", email, password);
    setIsSignedIn(true);
  };

  if (isSignedIn) {
    return <HomeLoggedIn props={isSignedIn} email={email} />;
  }

  return (
    <div className="auth">
      <div className="auth-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <SignUp />
    </div>
  );
};
export default SignIn;
