import React from "react";
import ContainerBackEnd from "../components/container";
import Footer from "../components/footer";
import Bar from "../components/sidemenu/Bar";
import menuAdmin from "./menu";

const AdminLayout = (props) => {
    return (
		<div className="page">
            <ContainerBackEnd {...props} menuElements={menuAdmin} />
            {/* <Bar /> */}
            <Footer />
        </div>
    );
};

export default AdminLayout;
