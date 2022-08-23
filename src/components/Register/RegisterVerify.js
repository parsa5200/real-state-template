import React, { useState, useEffect } from 'react';
import { CustomInput1 } from "../../components"
import { validate } from "../validate"
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../toast"
const LoginStep = ({ nextStep, prevStep }) => {
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
                    <i className="fa-solid fa-pen backButton" onClick={() => prevStep()}></i>
                    <span className='showNumber'>09381655200</span>
                </div>
                <span className='description'>کد تایید 6 رقمی برای شما ارسال شد</span>
                <div className='formField'>
                    <CustomInput1
                        badgeText="کد تایید"
                        value={data.password}
                        onValueChange={changeHandler}
                        className={(errors.password && touched.password) ? "uncompleted" : "inputContainer"}
                        type="password"
                        name="password"
                        onFocus={focusHandler}
                        badgeStyle="inputTStyle"
                        icon="fa-light fa-barcode-read"
                        inputStyle="formInput"
                    />
                    {errors.password && touched.password && <span className='errorText' >{errors.password}</span>}
                </div>
                <div className='notReceiveContainer' >
                    <span className='description'>کد را دریافت نکردید؟</span>
                    <span className='description me-2'>2:00 ارسال مجدد</span>
                </div>
                <div className='formButtons mt-2'>
                    <button className='registerButton' type='submit' >ورود</button>
                    <button className='sendButton'  >ورود با پیامک</button>
                </div>
            </form>
        </div>
    );
};

export default LoginStep;