import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupHandler = async () => {
    console.log({ fullName, email, password });
    if (!fullName || !email || !password) {
      alert("Please provide all credentials");
    } else {
      try {
        const user = await axios.post("http://localhost:3000/user/signup", {
          fullName,
          email,
          password,
        });
        if (user.data.token && user.data.user) {
          localStorage.clear();
          localStorage.setItem("token", user.data.token);
          localStorage.setItem("user", JSON.stringify(user.data.user));
          navigate("/");
          console.log(user);
        }
      } catch (err) {
        alert("Something went wrong.");
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
        <Typography variant="h4">Signup</Typography>
      </div>
      <div
        className="my-2 w-full flex
justify-center items-center"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Fullname"
          variant="outlined"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div
        className="my-2 w-full flex
justify-center items-center"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div
        className="my-2 w-full flex
justify-center items-center"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        className="my-2 w-full flex
justify-start items-center"
      >
        <Button variant="contained" size="large" onClick={signupHandler}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
