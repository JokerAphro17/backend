import { lazy } from "react";
import HANDLER_STORAGE from "../../data";
import { ROLES, USER_SESSION } from "../../utilities/constant";

const user = HANDLER_STORAGE.GET(USER_SESSION, 'object')?.data ?? null;

const otherRoutes = [
    {
        path: "/unauthorize",
        element: lazy(() => import(`../../pages/others/unauthorize`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "*",
        element: lazy(() => import(`../../pages/others/not-found`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "/accounts/profile",
        element: lazy(() => import(`../../pages/others/profile`)),
        layout: `${user?.role == 'user' ? 'Client' : 'Admin'}`,
        permissions: [ROLES.ACCOUNTING, ROLES.ADMIN, ROLES.JOURNALIST, ROLES.OBSERVER, ROLES.USER],
    },
    {
        path: "/accounts/access",
        element: lazy(() => import(`../../pages/others/profile-access`)),
        layout: `${user?.role == 'user' ? 'Client' : 'Admin'}`,
        permissions: [ROLES.ACCOUNTING, ROLES.ADMIN, ROLES.JOURNALIST, ROLES.OBSERVER, ROLES.USER],
    },
];

export default otherRoutes;
