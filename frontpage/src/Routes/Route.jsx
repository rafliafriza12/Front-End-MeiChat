import SideBar from "../Views/main";
import SignIn from "../Views/SignIn";
import SignUp from "../Views/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={SignIn}/>
          <Route path="/signup" Component={SignUp}/>
          <Route path="/dashboard" Component={SideBar} />
        </Routes>
      </Router>
      {/* <SideBar/> */}
    </div>
  );
};

export default Routing;
