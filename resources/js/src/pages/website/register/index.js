import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { signupUsers } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { alertClosed, alertPending } from '../../../components/sweet-alert';
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

const RegisterPage = (props) => {
    const navigate = useNavigate();

    const [formRegister, setFormRegister] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [errorFormRegister, setErrorFormRegister] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [message, setMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;

        setFormRegister({
            ...formRegister,
            [name]: value,
        })
    }

    const signup = async () => {
        if(
            !formRegister.firstname ||
            !formRegister.lastname ||
            !formRegister.email ||
            !formRegister.password ||
            !formRegister.password
        ) {
            const _message = 'Ce champ est requis';
            setErrorFormRegister({
                firstname: !formRegister.firstname ? _message : '',
                lastname: !formRegister.lastname ? _message : '',
                email: !formRegister.email ? _message : '',
                password: !formRegister.password ? _message : '',
                password_confirmation: !formRegister.password_confirmation ? _message : '',
            })
            return;
        }
        alertPending()
        try {
            await signupUsers(formRegister);
            alertClosed();
            navigate('/account/verified', {state: {email: formRegister.email}})
        } catch (error) {
            alertClosed();
            let _errorForm = {
                lastname: '',
                firstname: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
            let _message = '';
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
            }
            setErrorFormRegister(_errorForm)
            setMessage(_message);
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
                            Inscription au Journal Officiel du Burkina Faso
                        </span>
                        {message ? (
                            <div><p className='text-danger'><small>{message}</small></p></div>
                        ) : null}
                        <Form onSubmit={handleSubmit(signup)}>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0">
                                    <input className="input100"
                                        type="text"
                                        name="lastname"
                                        value={formRegister?.lastname ?? ''}
                                        onChange={handlerInput}
                                        placeholder="Votre nom de famille"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="8" opacity=".3" r="2.1"/><path d="M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z" opacity=".3"/><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1v1.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6.1c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1S9.9 9.16 9.9 8c0-1.16.94-2.1 2.1-2.1z"/></svg>
                                    </span>
                                </div>
                                {errorFormRegister?.lastname ? (
                                    <span className='text-danger'><small>{errorFormRegister.lastname}</small></span>
                                ) : null}
                            </div>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0">
                                    <input className="input100"
                                        type="text"
                                        name="firstname"
                                        value={formRegister?.firstname ?? ''}
                                        onChange={handlerInput}
                                        placeholder="Votre / vos prenom(s)"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="8" opacity=".3" r="2.1"/><path d="M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z" opacity=".3"/><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1v1.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6.1c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1S9.9 9.16 9.9 8c0-1.16.94-2.1 2.1-2.1z"/></svg>
                                    </span>
                                </div>
                                {errorFormRegister?.firstname ? (
                                    <span className='text-danger'><small>{errorFormRegister.firstname}</small></span>
                                ) : null}
                            </div>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0">
                                    <input className="input100"
                                        type="text"
                                        name="email"
                                        value={formRegister?.email ?? ''}
                                        onChange={handlerInput}
                                        placeholder="Votre adresse mail"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                                    </span>
                                </div>
                                {errorFormRegister?.email ? (
                                    <span className='text-danger'><small>{errorFormRegister.email}</small></span>
                                ) : null}
                            </div>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0">
                                    <input className="input100"
                                        type="password"
                                        name="password"
                                        value={formRegister?.password ?? ''}
                                        onChange={handlerInput}
                                        placeholder="Votre mot de passe"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                    </span>
                                </div>
                                {errorFormRegister?.password ? (
                                    <span className='text-danger'><small>{errorFormRegister.password}</small></span>
                                ) : null}
                            </div>
                            <div className='mb-2'>
                                <div className="wrap-input100 validate-input mb-0">
                                    <input className="input100"
                                        type="password"
                                        name="password_confirmation"
                                        value={formRegister?.password_confirmation ?? ''}
                                        onChange={handlerInput}
                                        placeholder="Confirmer votre mot de passe"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                    </span>
                                </div>
                                {errorFormRegister?.password_confirmation ? (
                                    <span className='text-danger'><small>{errorFormRegister.password_confirmation}</small></span>
                                ) : null}
                            </div>
                            <div className="container-login100-form-btn">
                                <Button type='submit' className="login100-form-btn btn-primary">
                                    S'inscrire
                                </Button>
                            </div>
                            <div className="text-center pt-3">
                                <p className="text-dark mb-0">J'ai déjà un compte ?
                                    <Link className="text-primary ml-1" to={'/login'}>Se connecter</Link>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegisterPage;
