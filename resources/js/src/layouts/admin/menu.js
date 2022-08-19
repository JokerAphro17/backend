import { IconArticles, IconGlobe, IconGroupUser, IconQuestion } from "../../components/icones";
import { ROLES } from "../../utilities/constant/app.constant";

const menuAdmin = [
    {
        id: 'dashbord',
        icon: () => <IconGlobe className="side-menu__icon" />,
        title: 'Tableau de bord',
        exact: true,
        navLink: '/admins',
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        header: "Gestion des documents",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
        navItems: [
            {
                id: 'newspapers',
                icon: () => <IconArticles  className="side-menu__icon" />,
                title: 'Journaux',
                navLink: '/handlers/newspapers',
                exact: true,
            },
        ],
    },
    {
        header: "Audiences",
        permissions: [ROLES.ADMIN],
        navItems: [
            {
                id: 'abonnements',
                icon: () => <IconQuestion  className="side-menu__icon" />,
                title: 'Abonnements',
                navLink: '/handlers/subscription',
                exact: true,
            },
        ],
    },
    {
        header: "Configurations",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
        navItems: [
            {
                id: 'users',
                icon: () => <IconGroupUser  className="side-menu__icon" />,
                title: 'Usagers',
                navLink: '/handlers/account-users',
                exact: true,
            },
            {
                id: 'admins',
                icon: () => <IconGroupUser  className="side-menu__icon" />,
                title: 'Administrateurs',
                navLink: '/handlers/account-admins',
                exact: true,
            },
        ],
    },
];

export default menuAdmin;
