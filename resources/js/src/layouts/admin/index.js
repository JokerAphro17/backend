import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar/index";

const AdminLayout = () => {
    return (
        <>
            {/* testtttt */}

            <div className="flex  w-full h-screen  text-gray-700">
                <div className="flex w-full max-w-full">
                    <Sidebar />
                    <div className=" border-l border-r border-gray-300 w-full">
                        <Navbar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
