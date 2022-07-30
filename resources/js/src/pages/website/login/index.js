import React, { Fragment, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { signinUsers } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { ROLES } from '../../../utilities/constant';
import useAuth from '../../../utilities/hook/useAuth';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { alertPending, alertClosed } from '../../../components/sweet-alert';
import { errorNotif } from '../../../components/notification';

const LoginPage = (props) => {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });
    const [errorFormLogin, setErrorFormLogin] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const userInfo = auth?.user ?? null;
        if (userInfo?.token && userInfo?.role) {
            navigate(
                userInfo?.role == "user" ? "/users" : "/admins",
                {
                    state: { from: location },
                    replace: true
                }
            );
        }
    }, [auth])

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;

        setFormLogin({
            ...formLogin,
            [name]: value,
        })
    }

    const signin = async () => {
        if(!formLogin.email || !formLogin.password) {
            const _message = 'Ce champ est requis';
            setErrorFormLogin({
                email: !formLogin.email ? _message : '',
                password: !formLogin.password ? _message : '',
            })
            return;
        }

        alertPending()
        try {
            const response = await signinUsers(formLogin);
            const dataReceive = response?.data?.data;
            alertClosed()
            if(dataReceive) {
                auth.signin(dataReceive, () => {
                    let goToDashboard = '/admins';
                    if(dataReceive?.role == ROLES.USER) {
                        goToDashboard = '/users';
                    }
                    navigate(goToDashboard);
                });
            }
        } catch (error) {
            alertClosed()
            let _message = '';
            let _errorForm = {
                email: '',
                password: '',
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif('Echec', error);
            }
            setMessage(_message);
            setErrorFormLogin(_errorForm)
        }
    }

    return (
        <Fragment>
            <div className="cols col-login mx-auto">
                <div className="text-center">
                    <LogoForPage />
                </div>
            </div>
            <div className="container-login100">
                <div className="wrap-login100 p-6">
                    <div className="login100-form validate-form">
                        <span className="login100-form-title">
                            S'authentification
                        </span>
                        {message ? (
                            <div><p className='text-danger'><small>{message}</small></p></div>
                        ) : null}

                        <Form onSubmit={handleSubmit(signin)}>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input
                                        type="text"
                                        name="email"
                                        value={formLogin?.email}
                                        onChange={handlerInput}
                                        className={`input100 ${errorFormLogin?.email ? 'is-invalid' : ''}`}
                                        placeholder="Votre adresse mail"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                                    </span>
                                </div>
                                {errorFormLogin?.email ? (
                                    <span className='text-danger'><small>{errorFormLogin.email}</small></span>
                                ) : null}
                            </div>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0" data-validate="Password is required">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formLogin?.password}
                                        onChange={handlerInput}
                                        className={`input100 ${errorFormLogin?.password ? 'is-invalid' : ''}`}
                                        placeholder="Votre mot de passe"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                    </span>
                                </div>
                                {errorFormLogin?.password ? (
                                    <span className='text-danger'><small>{errorFormLogin.password}</small></span>
                                ) : null}
                            </div>
                            <div className="text-right pt-1">
                                <p className="mb-0">
                                    <Link className="text-primary ml-1" to={'/forgot-password'}>Mot de passe oublié ?</Link>
                                </p>
                            </div>
                            <div className="container-login100-form-btn">
                                <Button type='submit' className="login100-form-btn btn-primary">
                                    Se connecter
                                </Button>
                            </div>
                            <div className=" flex-c-m text-center mt-3">
                                <p>Ou</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><Link to={'/register'} className="btn  btn-social btn-block btn-mail"><i className="fa fa-envelope"></i> S'inscrire </Link></li>
                                        {/* <li><a className="btn  btn-social btn-block btn-google"><i className="fa fa-google-plus"></i> Sign up with Google</a></li>
                                        <li><a className="btn  btn-social btn-block btn-facebook mt-2"><i className="fa fa-facebook"></i> Sign in with Facebook</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LoginPage;
