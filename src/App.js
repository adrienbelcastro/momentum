import "./App.scss";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
