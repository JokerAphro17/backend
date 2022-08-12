import AdminLayout from "../layouts/admin";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/admin/home";
import All from "../pages/admin/user/all";
import AddUser from "../pages/admin/user/add";

const AdminRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path="user" element={<All />} />
                    <Route path="user/add" element={<AddUser />} />
                </Route>
            </Routes>
        </>
    );
};

export default AdminRoute;
