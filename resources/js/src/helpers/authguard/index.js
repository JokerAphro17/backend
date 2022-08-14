import {useNavigate} from "react-router-dom";
import React from "react";
import {me} from "../../api/request";
import useAuth from "../../utilities/hook/useAuth"
import { Navigate } from "react-router-dom";

export const isLoggedIn  = async (auth) => {
    let authenticated = false;
   await  me().then(res => {
        auth.signin(res.data?.data, () => {
        authenticated = true;
        });
    }).catch(err => {
        authenticated = false;
    }
    );
    return authenticated;
}


const AuthGuard =  ({children}) => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [authenticated, setAuthenticated] = React.useState(false);
    
    isLoggedIn(auth).then(res => {
        setAuthenticated(res);
    });
    if(!authenticated) {
        console.log("not authenticated");
        <Navigate to="/auth/login" />
    }
    return children;
}
 
export default AuthGuard;