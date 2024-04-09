import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginIllustration, logo } from "../../assets";

type User = {
  id: number;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading indicator
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submitting the form
    try {
      const response = await fetch(
        `https://run.mocky.io/v3/aadb02f2-9a44-4a9c-8fde-152aaf000c30`
      );
      if (response.ok) {
        const responseData = await response.json();
        const users = responseData.users;
        const matchedUser = users.find((user: User) => {
          return user.email === email && user.password === password;
        });
        if (matchedUser) {
          localStorage.setItem("user", JSON.stringify(matchedUser));
          navigate("/dashboard");
          return;
        } else if (!matchedUser) {
          alert("Invalid username or password!");
        }
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid email or password");
    } finally {
      setIsLoading(false); // Set loading state to false when login process is complete
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
