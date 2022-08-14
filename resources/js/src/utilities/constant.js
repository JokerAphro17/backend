export const ROLES = {
    ALL: "all",
    USER: "user",
    ADMIN: "admin",
    OBSERVER: "observer",
    JOURNALIST: "journalist",
    ACCOUNTING: "accounting",
};
export const TOKEN_TYPE = 'Bearer';
export const USER_SESSION = "USER_SESSION";


export const API_DOMAIN = "http://10.21.5.15:3000";

export const API_URL = `${API_DOMAIN}/api`;
export const API_STORAGE_URL = `${API_DOMAIN}/storage`;
export const FILE_HEADERS = {
    headers: { "Content-Type": "multipart/form-data" },
};
