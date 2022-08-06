import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminGuard = ({children}) => {
    
    const isAdmin = true;
    if(!isAdmin){
        return <Navigate to="/auth/login" />
    }
    return children;
};

export default AdminGuard;