import { TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/atom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const loginHander = async () => {
    if (!password || !email) {
      alert("Enter all fields");
    } else {
      const user = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log(user.data);
      if (user.data.token && user.data.user) {
        localStorage.setItem("token", JSON.stringify(user.data.token));
        localStorage.setItem("user", JSON.stringify(user.data.user));
        setUser(JSON.parse(localStorage.getItem("user")));
        navigate("/");
      } else {
        alert("Email or password is incorrect");
      }
    }
  };

  return (
    <div
      className="flex
    justify-center items-center flex-col px-5
    my-10 w-full"
    >
      <div className="my-2">
        <Typography variant="h4">Login</Typography>
      </div>
      <div
        className="my-2 w-full flex
    justify-center items-center"
      >
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div
        className="my-2 w-full flex
    justify-center items-center"
      >
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div
        className="my-2 w-full flex
    justify-start items-center"
      >
        <Button variant="contained" size="large" onClick={loginHander}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
