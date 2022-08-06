import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../utilities/hook/useAuth";

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth?.user?.token) {
       
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
