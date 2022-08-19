import { lazy } from 'react';
import { AuthGuard } from '../components/AuthGuard';

export const adminRoutes = [
    {
        path: "/admins",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/home`)),
        layout: "Admin",
        
    },
    {
        path: "/handlers/account-users",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/all/usagers`)),
        layout: "Admin",
    },
    {
        path: "/handlers/account-admins",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/all/admin`)),
        layout: "Admin",
    },
    {
        path: "/handlers/account-admins/add",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/add`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN],
    },
    {
        path: "/handlers/account-admins/edit",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/edit`)),
        layout: "Admin",
    },
    {
        path: "/handlers/users/show",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/show`)),
        layout: "Admin",
    },
    // {
    //     path: "/handlers/subscription",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/abonnement/all`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/subscription/add",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/abonnement/add`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/subscription/edit",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/abonnement/edit`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/subscription/show",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/abonnement/show`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/newspapers",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/newspaper/all`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/newspapers/add",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/newspaper/add`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/newspapers/edit",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/newspaper/edit`)),
    //     layout: "Admin",
    // },
    // {
    //     path: "/handlers/newspapers/show",
    //     guard: AuthGuard,
    //     component: lazy(() => import(`../../pages/admin/newspaper/show`)),
    //     layout: "Admin",
    // },
]
