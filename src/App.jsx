import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import HomePageFooter from "./Components/HomePageFooter";
import ScrollPage from "./Components/ScrollPage";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />}/>
        <Route path="/Footer" element={<HomePageFooter />}/>
      </Routes>
      
      
      <ScrollPage />
    </>
  );
}

export default App;
