import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import  Sidebar from "../components/sidebar/index"

const AdminLayout = () => {
    return (
        <>
            {/* testtttt */}

            <div class="flex  w-full h-screen  text-gray-700">
                <div class="flex w-full max-w-full">
                    <Sidebar />
                    <div class="flex flex-col flex-grow border-l border-r border-gray-300 w-full">
                        
                          <Navbar/>
                          
                        
                        <div class="flex overflow-auto">
                          <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
