import { lazy } from "react";
import HANDLER_STORAGE from "../../data";
import { ROLES, USER_SESSION } from "../../utilities/constant/app.constant";

const user = HANDLER_STORAGE.GET(USER_SESSION, 'object')?.data ?? null;

const otherRoutes = [
    {
        path: "/login",
        component: lazy(() => import(`../../pages/website/login`)),
        layout: "Blank",
    },
    {
        path: "/register",
        component: lazy(() => import(`../../pages/website/register`)),
        layout: "Blank",
    },
    {
        path: "/account/verified",
        component: lazy(() => import(`../../pages/website/verify-account`)),
        layout: "Blank",
    },
    {
        path: "/forgot-password",
        component: lazy(() => import(`../../pages/website/forgot-password`)),
        layout: "Blank",
    },
    {
        path: "/password/reset/:token",
        component: lazy(() => import(`../../pages/website/forgot-password-confirm`)),
        layout: "Blank",
    },
    {
        path: "/unauthorize",
        component: lazy(() => import(`../../pages/others/unauthorize`)),
        layout: "Blank",
    },
    {
        path: "*",
        component: lazy(() => import(`../../pages/others/not-found`)),
        layout: "Blank",
    },
    {
        path: "/accounts/profile",
        component: lazy(() => import(`../../pages/others/profile`)),
        layout: `${user?.role == 'user' ? 'Client' : 'Admin'}`,
        permissions: [ROLES.ACCOUNTING, ROLES.ADMIN, ROLES.JOURNALIST, ROLES.OBSERVER, ROLES.USER],
    },
    {
        path: "/accounts/access",
        component: lazy(() => import(`../../pages/others/profile-access`)),
        layout: `${user?.role == 'user' ? 'Client' : 'Admin'}`,
        permissions: [ROLES.ACCOUNTING, ROLES.ADMIN, ROLES.JOURNALIST, ROLES.OBSERVER, ROLES.USER],
    },
];

export default otherRoutes;
