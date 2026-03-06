import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universe from "./Universe";
import Signup from "./landing_page/signup/signup";
import Login from "./landing_page/signup/login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Universe />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;




