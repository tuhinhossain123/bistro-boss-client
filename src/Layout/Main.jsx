import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import NavBar from './../Pages/Sheard/Navbar/Navbar';


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
     {noHeaderFooter || <NavBar></NavBar>}
      <div className=" min-h-[calc(100vh-5px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
