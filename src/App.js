import Navbar from "./components/pages/shared/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Footer from "./components/pages/shared/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/login'} element={<Login/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
