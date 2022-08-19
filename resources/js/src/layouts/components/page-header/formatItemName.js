const formatItemName = (name) => {
    switch (name) {
        case 'access':
            return 'identifiants';
        case 'account-users':
            return 'compte usagers';
        case 'account-admins':
            return 'compte administrateurs';
        case 'admin':
            return 'administrateur';
        case 'admins':
            return 'administrateurs';
        case 'add':
            return 'ajout';
        case 'edit':
            return 'édition';
        case 'newspapers':
            return 'journaux';
        case 'show':
            return 'détail';
        case 'subscription':
            return 'abonnements';
        case 'user':
            return 'utilisateur';
        case 'users':
            return 'utilisateurs';
        default:
            return `${name}`;
    }
}

export default formatItemName;
