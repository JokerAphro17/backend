import AdminLayout from "../layouts/admin";
import {Routes , Route} from "react-router-dom";
import Home from "../pages/admin/home";




const AdminRoute = () => {
    return (
        <>
            <Routes>
                <Route  element={<AdminLayout/> }>
                    <Route path="/home" element={<Home />} />

                    
                </Route>
            </Routes>
        </>
    );
};

export default AdminRoute;
