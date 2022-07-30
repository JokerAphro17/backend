import { IconGlobe, IconGroupUser } from "../../components/icones";
import { ROLES } from "../../utilities/constant";

const menuAdmin = [
    {
        id: 'dashbord',
        icon: () => <IconGlobe className="side-menu__icon" />,
        title: 'Tableau de bord',
        exact: true,
        navLink: '/admins',
        permissions: [ROLES.ADMIN, ROLES.ACCOUNTING, ROLES.JOURNALIST, ROLES.OBSERVER]
    },
    {
        header: "Gestion de compte",
        permissions: [ROLES.ADMIN],
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
