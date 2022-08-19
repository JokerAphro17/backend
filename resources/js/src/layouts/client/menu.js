import { IconArticles, IconGlobe, IconGroupUser } from "../../components/icones";
import { ROLES } from "../../utilities/constant/app.constant";

const menuClient = [
    {
        id: 'dashbord',
        icon: () => <IconGlobe className="side-menu__icon" />,
        title: 'Tableau de bord',
        exact: true,
        navLink: '/users',
        permissions: [ROLES.USER]
    },
    {
        id: 'newspapers',
        icon: () => <IconArticles  className="side-menu__icon" />,
        title: 'Journaux',
        navLink: '/clients/newspapers',
        exact: true,
        permissions: [ROLES.USER],
    },
];

export default menuClient;
