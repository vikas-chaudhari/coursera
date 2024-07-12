import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atom";
import { useEffect } from "react";
const Appbar = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setUser();
    navigate("/login");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="Navbar z-50 w-full flex justify-between items-center h-14 px-5 py-5 text-white bg-slate-900 shadow-md shadow-slate-900">
      <div className="logo">
        <h1 className="text-3xl font-bold text-blue-500">Coursera</h1>
      </div>
      {user ? (
        <div className="flex justify-center items-center gap-5">
          <div>
            <h1 className="text-white">{user.email}</h1>
          </div>

          <Button onClick={logoutHandler} variant="contained" size="large">
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-5">
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            variant="contained"
            size="large"
          >
            Signup
          </Button>

          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Appbar;
