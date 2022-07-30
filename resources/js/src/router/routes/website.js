import { lazy } from "react";

const websiteRoutes = [
    {
        path: "/",
        element: lazy(() => import(`../../pages/website/home`)),
        layout: "Website",
        permissions: [],
    },
    {
        path: "/login",
        element: lazy(() => import(`../../pages/website/login`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "/register",
        element: lazy(() => import(`../../pages/website/register`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "/account/verified",
        element: lazy(() => import(`../../pages/website/verify-account`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "/forgot-password",
        element: lazy(() => import(`../../pages/website/forgot-password`)),
        layout: "Blank",
        permissions: [],
    },
    {
        path: "/password/reset/:token",
        element: lazy(() => import(`../../pages/website/forgot-password-confirm`)),
        layout: "Blank",
        permissions: [],
    },
];

export default websiteRoutes;
