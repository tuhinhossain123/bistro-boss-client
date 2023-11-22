import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivetRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default PrivetRoutes;