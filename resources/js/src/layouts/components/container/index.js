import React from "react";
import Header from "../header";
import PageHeader from "../page-header";
import SideBar from "../sidebar";

const ContainerBackEnd = ({ children, menuElements }) => {
    return (
        <div className="page-main">
            <SideBar menuElements={menuElements} />
            <Header />
            <div className="app-content">
                <div className="side-app">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContainerBackEnd;
