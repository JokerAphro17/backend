import { lazy } from "react";
import { ROLES } from "../../utilities/constant";

const adminRoutes = [
    {
        path: "/admins",
        element: lazy(() => import(`../../pages/admin/dashboard`)),
        layout: "Admin",
        permissions: [ROLES.ACCOUNTING, ROLES.ADMIN, ROLES.JOURNALIST, ROLES.OBSERVER],
    },
    {
        path: "/handlers/account-users",
        element: lazy(() => import(`../../pages/admin/user/all/usager`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
    {
        path: "/handlers/account-admins",
        element: lazy(() => import(`../../pages/admin/user/all/admin`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
    {
        path: "/handlers/account-admins/add",
        element: lazy(() => import(`../../pages/admin/user/add`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
    {
        path: "/handlers/account-admins/edit",
        element: lazy(() => import(`../../pages/admin/user/edit`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
    {
        path: "/handlers/users/show",
        element: lazy(() => import(`../../pages/admin/user/show`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
];

export default adminRoutes;
