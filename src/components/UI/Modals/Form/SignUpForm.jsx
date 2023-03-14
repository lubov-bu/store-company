import React from 'react';
import "./Form.css";
import {useForm} from "react-hook-form";
import LoginButton from "../../Buttons/LoginButton";

const SignUpForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signUpForm signUpContent">
            <label htmlFor="signup">Sign up</label>

            {/*username input */}
            <input id="name"
                   type="text"
                   aria-invalid={errors.name ? "true" : "false"}
                   {...register('name', {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}
                   placeholder="Username" className="loginInput"/>
            {/*indicate input contain error */}
            {errors.name && errors.name.type === "required" && (
                <span role="alert" className="loginError">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
                <span role="alert" className="loginError">Max length exceeded</span>
            )}

            {/*e-mail input */}
            <input id="mail"
                   type="email"
                   aria-invalid={errors.mail ? "true" : "false"}
                   {...register("mail", {required: true, pattern: /\S+@\S+\.\S+/})} placeholder="E-mail"
                   className="loginInput"/>
            {errors.mail && errors.mail.type === "required" && (
                <span role="alert" className="loginError">This is required</span>
            )}
            {errors.mail && errors.mail.type === "pattern" && (
                <span role="alert" className="loginError">E-mail is not valid</span>
            )}

            {/*password input */}
            <input id="password"
                   type="password"
                   aria-invalid={errors.password ? "true" : "false"}
                   {...register("password", {required: true, minLength: 10})} placeholder="Password"
                   className="loginInput"/>
            {errors.password && errors.password.type === "required" && (
                <span role="alert" className="loginError">This is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <span role="alert" className="loginError">Min length is 10 symbols</span>
            )}

            <LoginButton type="submit">Enter</LoginButton>
        </form>
    );
};

export default SignUpForm;