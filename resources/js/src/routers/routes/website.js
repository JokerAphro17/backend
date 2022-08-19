import { lazy } from "react";

const websiteRoutes = [
    {
        path: "/",
        component: lazy(() => import(`../../pages/website/home`)),
        layout: "Website",
    },
    {
        path: "/abouts",
        component: lazy(() => import(`../../pages/website/home`)),
        layout: "Website",
    },
];

export default websiteRoutes;
