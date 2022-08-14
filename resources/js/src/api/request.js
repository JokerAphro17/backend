// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";

const FILE_HEADERS = {
    headers: { "Content-Type": "multipart/form-data" },
};

export const signinUsers = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("signin", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

    export const getUsers = () => 
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("users")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    }
    );

   export const addAdmin = (params) => 
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("users", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

    