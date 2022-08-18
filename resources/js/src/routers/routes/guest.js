import { lazy } from 'react';
import { ROLES } from '../../utilities/constant/app.constant';
import { AuthGuard } from '../components/AuthGuard';
import { GuestGuard } from '../components/GuestGuard';

export const guestRoutes = [
    {
        path: "/users",
        guard: AuthGuard,
        layout: "Client",
        permissions: [ROLES.USER],
        component: lazy(() => import(`../../pages/client/dashboard`)),
    },
    {
        path: "/clients/newspapers",
        layout: "Client",
        guard: AuthGuard,
        permissions: [ROLES.USER],
        component: lazy(() => import(`../../pages/client/newspaper/all`)),
    },
    {
        path: "/clients/newspapers/show",
        guard: AuthGuard,
        layout: "Client",
        permissions: [ROLES.USER],
        component: lazy(() => import(`../../pages/client/newspaper/show`)),
    },
]
