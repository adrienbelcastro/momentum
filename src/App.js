import "./App.scss";
import Header from "./Components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/footer";
import SignUpPage from "./Pages/Page/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
