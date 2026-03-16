import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/singlepageapplication/Singlepage";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<SinglePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
