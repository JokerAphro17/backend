import { lazy } from 'react';
import { ROLES } from '../../utilities/constant/app.constant';
import { AuthGuard } from '../components/AuthGuard';

export const adminRoutes = [
    {
        path: "/admins",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/dashboard`)),
        layout: "Admin",
        permissions: [ROLES.SUPERADMIN, ROLES.ADMIN ],
    },
    {
        path: "/handlers/account-users",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/all/usager`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN ],
    },
    {
        path: "/handlers/account-admins",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/all/admin`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN ],
    },
    {
        path: "/handlers/account-admins/add",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/add`)),
        layout: "Admin",
        permissions: [ROLES.SUPERADMIN ],
    },
    {
        path: "/handlers/account-admins/edit",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/edit`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/users/show",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/user/show`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/subscription",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/abonnement/all`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/subscription/add",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/abonnement/add`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/subscription/edit",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/abonnement/edit`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/subscription/show",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/abonnement/show`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/newspapers",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/newspaper/all`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/newspapers/add",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/newspaper/add`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/newspapers/edit",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/newspaper/edit`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        path: "/handlers/newspapers/show",
        guard: AuthGuard,
        component: lazy(() => import(`../../pages/admin/newspaper/show`)),
        layout: "Admin",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
]
