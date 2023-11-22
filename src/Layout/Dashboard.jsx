import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen p-5  bg-yellow-600">
        <ul className="menu text-lg text-white font-semibold">
        {
          isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <IoHome />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
             <FaUtensils></FaUtensils>
              Add items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
            <TbBrandBooking />
              Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          </>
          :
          <>
            <li>
            <NavLink to="/dashboard/userHome">
              <IoHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaCalendar></FaCalendar>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <TiMessageTyping />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <TbBrandBooking />
              Payment Real History
            </NavLink>
          </li>
          </>
        }
          <div className="divider"></div>
          <li>
            <NavLink to="/home">
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
