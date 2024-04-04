import "./Login.scss";

import { loginIllustration, logo } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3500/users`);
      if (response.ok) {
        const users: User[] = await response.json();
        console.log(users);
        const matchedUser = users.find((user) => {
          console.log(user.email, user.password);
          return user.email === email && user.password === password;
        });
        if (matchedUser) {
          localStorage.setItem("user", JSON.stringify(matchedUser));
          navigate("/dashboard");
          return;
        }
      }

      throw new Error("Invalid email or password");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid email or password");
    }
  };

  const handlePasswordVisibilty = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login__img_section">
        <img src={logo} alt="logo" className="logo__img_section-logo" />
        <img
          src={loginIllustration}
          alt="illustration"
          className="logo__img_section-illustration"
        />
      </div>
      <div className="login__form">
        <form action="" method="post" onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <h2>Enter details to login.</h2>
          <input
            type="email"
            name=""
            id="emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="login__form_password-field">
            <input
              className="login__form_password-input"
              type={showPassword ? "text" : "password"}
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={handlePasswordVisibilty}
              className="login__form_password-button"
              type="button"
              disabled={password === "" ? true : false}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
          <a href="" className="login__forgot-password">
            FORGOT PASSWORD
          </a>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
