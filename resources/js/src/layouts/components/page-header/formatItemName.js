const formatItemName = (name) => {
    switch (name) {
        case 'access':
            return 'identifiants';
        case 'account-users':
            return 'compte usagers';
        case 'account-admins':
            return 'compte administrateurs';
        case 'add':
            return 'ajout';
        case 'show':
            return 'détail';
        case 'edit':
            return 'édition';
        case 'user':
            return 'utilisateur';
        case 'users':
            return 'utilisateurs';
        case 'admin':
            return 'administrateur';
        case 'admins':
            return 'administrateurs';
        default:
            return `${name}`;
    }
}

export default formatItemName;
