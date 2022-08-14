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
        
                
     
