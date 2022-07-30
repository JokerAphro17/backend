import React from "react";

const BlankLayout = ({ children }) => {
    return (
        <div className="blank-img">
            <div className="page">
                {children}
            </div>
        </div>
    );
};

export default BlankLayout;
