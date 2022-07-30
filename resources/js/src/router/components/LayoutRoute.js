import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import RequireAuth from "./RequireAuth";

const LayoutRoute = ({
    children,
    layoutComponent,
    isProtectRoute,
    isAuthorizedRoute,
}) => {
    const location = useLocation();
    const LayoutComponent = layoutComponent;
    if (isProtectRoute) {
        if (!isAuthorizedRoute) {
            return (
                <Navigate
                    to="/unauthorize"
                    state={{ from: location }}
                    replace
                />
            );
        }
        return (
            <RequireAuth>
                <LayoutComponent>{children}</LayoutComponent>
            </RequireAuth>
        );
    }
    return <LayoutComponent>{children}</LayoutComponent>;
};

export default LayoutRoute;
