import { lazy } from "react";
import { ROLES } from "../../utilities/constant";

const clientRoutes = [
    {
        path: "/users",
        element: lazy(() => import(`../../pages/client/dashboard`)),
        layout: "Client",
        permissions: [ROLES.USER],
    },
];

export default clientRoutes;
