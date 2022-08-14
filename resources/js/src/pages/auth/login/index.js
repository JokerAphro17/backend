import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../utilities/hook/useAuth";
import { signinUsers } from "../../../api/request";
const Login = () => {
    const navigate = useNavigate();
    const auth = useAuth(); 
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {
        signinUsers(data).then(res => {
            auth.signin(res.data?.data, () => {
                console.log(res.data?.data); 
                navigate("/");  
            }
            );
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
                timer: 2500,
            })  
        })
        }
        
    return (
        <>
            <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800 mt-8 border-2 border-gray-200">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Brand
                </h1>
<<<<<<< HEAD
               
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <div class="mt-8">
                    
=======
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-8">
>>>>>>> 8fa90216afe57e4c858ac287def079fc828ca644
                        <Controller 
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    size="small"
                                    fullWidth
                                    error = {errors.email}
                                    value={value || ""}
                                    onChange={onChange}
                                    onBlur={onBlur}

                                    helperText={errors.email && errors.email.message}
                                />)}
<<<<<<< HEAD
                               
=======

>>>>>>> 8fa90216afe57e4c858ac287def079fc828ca644
                                rules={{ required: "Email est requis",
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Adress email invalide" },
                                }}
                        />       
                    </div>

                    <div className="mt-8">
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                type={'password'}
                                    label="Password"
                                    id="outlined-size-small"
                                    size="small"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value || ""}
                                    fullWidth
                                    error = {errors.password}
                                    helperText={errors.password && errors.password.message}
                                />
                            )}
                            rules={{ required: "Password est requis" }}
                        />

                                
                        <a
                            href="#"
                            className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                        >
                            Forget Password?
                        </a>
                    </div>

                    <div className="mt-6">
                        <input value="Login" type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
