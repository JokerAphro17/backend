// // useAuthorized

// import { ROLES } from '../../utilities/constant/constant';

// export function useAuthorized(permissions, user) {
//     if(user?.role && permissions.length > 0) {
//         return permissions.includes(user?.role) || permissions.includes(ROLES.ALL) ? true : false;
//     }
//     return true;
// }
