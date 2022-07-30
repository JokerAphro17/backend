import AdminLayout from "../layouts/admin";
import ClientLayout from "../layouts/client";
import BlankLayout from "../layouts/blank";
import WebsiteLayout from "../layouts/website";
import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes";
import LayoutRoute from "./components/LayoutRoute";
import { ROLES, USER_SESSION } from "../utilities/constant";
import HANDLER_STORAGE from "../data";

const Layouts = {
    Admin: AdminLayout,
    Client: ClientLayout,
    Blank: BlankLayout,
    Website: WebsiteLayout,
};

const ConfigRoute = () => {
    const user = HANDLER_STORAGE.GET(USER_SESSION, 'object')?.data ?? null;
    return (
        <Routes>
            {appRoutes.map((route, index) => {
                const path = route?.path;
                const ComponentView = route?.element;
                const RouteLayout = route?.layout
                    ? Layouts[`${route?.layout}`]
                    : BlankLayout;
                const authorizedRole = route?.permissions ?? [];
                let isAuthorized = false;
                if (authorizedRole.length > 0) {
                    isAuthorized =
                        authorizedRole.includes(user?.role) ? true :
                        authorizedRole.includes(ROLES.ALL) ? true :
                        false;
                }
                // if (path.match(/^\/login/) && isUserLoggedIn()) {
                //     return (
                //         <Navigate to="/unauthorize" state={{ from: location }} replace />
                //     );
                // }
                return (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <LayoutRoute
                                layoutComponent={RouteLayout}
                                isProtectRoute={
                                    route.layout === "Admin" ||
                                    route.layout === "Client"
                                }
                                isAuthorizedRoute={isAuthorized}
                            >
                                <ComponentView />
                            </LayoutRoute>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default ConfigRoute;
