import { TextField } from "@mui/material";
import { data } from "autoprefixer";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addAdmin } from "../../../../api/request";
import Swal from 'sweetalert2';
import axios from "axios";



const AddUser = () => {
    

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

   const onSubmit = (data) => {
    console.log(data);
    addAdmin(data)
    .then(res => {
        console.log(res);
        Swal.fire({
            title: 'Success',
            text: 'User Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          })
          .then((res) => {

            console.log(res);
          })
    })
    .catch(err => {
        console.log(err);
        Swal.fire({
            title: 'Error',
            text: 'User Already Exists',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    })
   
    };
        




    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800  mt-12">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    Account settings
                </h2>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                        <Controller 
                            control={control}
                            name="firstname"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    label="Firstname"
                                    id="outlined-size-small"
                                    
                                    fullWidth
                                    error = {errors.firstname}
                                    value={value || ""}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    helperText={errors.firstname && errors.firstname.message}
                                />)}
                               
                                rules={{ required: "Nom est requis"
                                }}
                        /> 
                        </div>
                        <div>
                        <Controller 
                            control={control}
                            name="lastname"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    label="lastname"
                                    id="outlined-size-small"
                                    
                                    fullWidth
                                    error = {errors.lastname}
                                    value={value || ""}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    helperText={errors.lastname && errors.lastname.message}
                                />)}
                               
                                rules={{ required: "Prenom est requis"
                                  
                                }}
                        /> 
                        </div>

                       
                        <div>
                        <Controller 
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    
                                    fullWidth
                                    error = {errors.email}
                                    value={value || ""}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    helperText={errors.email && errors.email.message}
                                />)}
                               
                                rules={{ required: "Email est requis",
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Adress email invalide" },
                                }}
                        /> 
                        </div>

                        <div>
                        <Controller 
                            control={control}
                            name="telephone"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    label="Telephone"
                                    id="outlined-size-small"
                                    
                                    fullWidth
                                    error = {errors.telephone}
                                    value={value || ""}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    helperText={errors.telephone && errors.telephone.message}
                                />)}
                               
                                rules={{ required: "Telephone est requis",
                                   
                                }}
                        /> 
                        </div>

                      
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
 
export default AddUser;