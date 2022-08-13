import AdminLayout from "../layouts/admin";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
const AuthRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="login" element={<Login />} />
                    {/* <Route path="register" element={<Register />} /> */}
                </Route>
            </Routes>
        </>
    );
};

export default AuthRoute;
