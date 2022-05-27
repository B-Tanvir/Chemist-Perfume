import Navbar from "./components/pages/shared/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Footer from "./components/pages/shared/Footer";
import Register from "./components/pages/login/Register";
import ErrorPage from "./components/pages/ErrorPage/Errorpage";
import InventoryDetails from "./components/pages/InventoryDetails/InventoryDetails";
import RequireAuth from "./components/pages/login/RequireAuth";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import ManageInventory from "./components/pages/InventoryDetails/ManageInventory";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/login'} element={<Login/>}></Route>
            <Route path={'/register'} element={<Register/>}></Route>
            <Route path={'/inventory/:id'} element={
                <RequireAuth>
                    <InventoryDetails/>
                </RequireAuth>
            }></Route>
            <Route path={'/inventory/all'} element={
                <RequireAuth>
                    <ManageInventory/>
                </RequireAuth>
            }></Route>
            <Route path={'*'} element={<ErrorPage/>}></Route>
        </Routes>
        <Footer/>
        <ToastContainer/>
    </div>
  );
}

export default App;
