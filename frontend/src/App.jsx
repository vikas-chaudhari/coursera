import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Landing from "./components/pages/Landing";
import Appbar from "./components/partials/Appbar";
import SideBar from "./components/partials/SideBar";
import Courses from "./components/pages/Courses";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import { useRecoilValue } from "recoil";
import { userState } from "./recoil/atom";
import MyPurchases from "./components/pages/MyPurchases";

function App() {
  const user = useRecoilValue(userState);
  return (
    <div className="flex flex-col items-center">
      <Router>
        <Appbar />
        {user ? <SideBar /> : ""}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-purchases" element={<MyPurchases />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
