import React from "react";
import ContainerBackEnd from "../components/container";
import Footer from "../components/footer";
import menuClient from "./menu";

const ClientLayout = (props) => {
    return (
		<div className="page">
            <ContainerBackEnd {...props} menuElements={menuClient} />
            {/* <Bar /> */}
            <Footer />
        </div>
    );
};

export default ClientLayout;
