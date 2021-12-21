import "./App.css";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Notification from "./Components/Notification/Notification";
import PrivateMessaging from "./Components/PrivateMessage/PrivateMessaging";

function App() {
  return (
    <div>
      <Signup />
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/PM" element={<PrivateMessaging />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
