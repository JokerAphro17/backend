// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";

const FILE_HEADERS = {
    headers: { "Content-Type": "multipart/form-data" },
};
const FORM_DATA_HEADERS = {
    headers: { "Content-Type": "application/json" },
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
    export const me = () =>
       new Promise((resolve, reject) => {
              HTTP_CLIENT.get("me")
                .then((response) => {
                     resolve(response);
                })
                .catch((error) => {
                     const message = handlingErrors(error);
                     reject(message);
                });
         }
            );
    export const getUser = (uuid) =>
         new Promise((resolve, reject) => {
                  HTTP_CLIENT.get(`users/${uuid}`)
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
    }
    )
    export const userListePaginate = (params) =>
        new Promise((resolve, reject) => {
            HTTP_CLIENT.get(`users/page/${params}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    const message = handlingErrors(error);
                    reject(message);
                });
        }
        )
    export const changePhoto = (params) =>
        new Promise((resolve, reject) => {
            HTTP_CLIENT.post(`users/change/photo`, params, FILE_HEADERS)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    const message = handlingErrors(error);
                    reject(message);
                });
        }
        )
    
    
