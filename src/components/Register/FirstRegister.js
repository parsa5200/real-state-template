import React, { useState, useEffect } from 'react';
import { CustomInput1 } from "../../components"
import { validate } from "../validate"
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../toast"
const FirstRegister = () => {
    const [data, setData] = useState({ phoneNumber: "" });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "phoneNumber"))
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
            notify("شماره همراه ثبت شد", "success")
        } else {
            notify("لطفاً اطلاعات را تکمیل کنید", "error")
            setTouched({
                phoneNumber: true
            })
        }
    }

    return (
        <div className='formContainer'>
            <form onSubmit={submitHandler}>
                <h5>ورود / ثبت نام</h5>
                <span className='description'>برای ورود با ثبت نام شماره خود را وارد کنید</span>
                <div className='formField'>
                    <CustomInput1
                        badgeText="شماره همراه"
                        value={data.phoneNumber}
                        onValueChange={changeHandler}
                        className={(errors.phoneNumber && touched.phoneNumber) ? "uncompleted" : "inputContainer"}
                        type="tel"
                        name="phoneNumber"
                        onFocus={focusHandler}
                        maxLength="11"
                        badgeStyle="inputTStyle"
                        icon="fa-light fa-mobile-screen-button"
                        inputStyle="formInput"
                    />
                    {errors.phoneNumber && touched.phoneNumber && <span className='errorText' >{errors.phoneNumber}</span>}
                </div>
                <div className='formButtons'>
                    <button type='submit' >ادامه</button>
                </div>
            </form>
        </div>
    );
};

export default FirstRegister;