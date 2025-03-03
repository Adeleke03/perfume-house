import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/auth/sign-up" element={<SignUp/>} />
          <Route path="/auth/sign-in" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
