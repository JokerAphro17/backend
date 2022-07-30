import React from "react";
import { Outlet } from "react-router-dom";

const WebsiteLayout = ({children}) => {
    return (
        <div>
            WebsiteLayout
            <div>
                {children}
            </div>
        </div>
    );
};

export default WebsiteLayout;
