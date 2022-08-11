import React, { useState, useEffect } from 'react';
import { CustomInput1 } from "../../components"
import { validate } from "../validate"
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../toast"
const LoginStep = () => {
    const [data, setData] = useState({ password: "" });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "password"))
    }, [data, touched])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("ورود با موفقیت انجام شد", "success")
        } else {
            notify("گذرواژه نادرست است", "error")
            setTouched({
                password: true
            })
        }
    }

    return (
        <div className='formContainer'>
            <form onSubmit={submitHandler}>
                <div className='headerButton'>
                    <button className='backButton' ><i class="fa-light fa-circle-chevron-left"></i></button>
                    <span className='showNumber'>09381655200</span>
                </div>
                <h5>ورود</h5>
                <span className='description'>برای ورود لطفا گذرواژه را وارد کنید</span>
                <div className='formField'>
                    <CustomInput1
                        badgeText="گذرواژه"
                        value={data.password}
                        onValueChange={changeHandler}
                        className={(errors.password && touched.password) ? "uncompleted" : "inputContainer"}
                        type="password"
                        name="password"
                        onFocus={focusHandler}
                        badgeStyle="inputTStyle"
                        icon="fa-light fa-key"
                        inputStyle="formInput"
                    />
                    {errors.password && touched.password && <span className='errorText' >{errors.password}</span>}
                </div>
                <div className='formButtons'>
                    <button className='registerButton' type='submit' >ورود</button>
                    <button className='sendButton'  >ورود با پیامک</button>
                </div>
            </form>
        </div>
    );
};

export default LoginStep;