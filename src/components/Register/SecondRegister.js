import React, { useState, useEffect } from 'react';
import { CustomInput1 } from ".."
import { validate } from "../validate"
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../toast"
const SecondRegister = () => {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "singUp"))
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
            notify("ثبت نام با موفقیت انجام شد", "success")
        } else {
            notify("لطفاً اطلاعات را تکمیل کنید", "error")
            setTouched({
                name: true,
                lastName: true,
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
                <h5>ثبت نام</h5>
                <span className='description'>لطفا مشخصات درست خودتان را وارد کنید</span>
                <div className='formField'>
                    <CustomInput1
                        badgeText="نام"
                        value={data.name}
                        onValueChange={changeHandler}
                        className={(errors.name && touched.name) ? "uncompleted" : "inputContainer"}
                        type="text"
                        name="name"
                        onFocus={focusHandler}
                        badgeStyle="inputTStyle"
                        icon="fa-light fa-user"
                        inputStyle="formInput"
                    />
                    {errors.name && touched.name && <span className='errorText' >{errors.name}</span>}
                </div>
                <div className='formField'>
                    <CustomInput1
                        badgeText="نام خانوادگی"
                        value={data.lastName}
                        onValueChange={changeHandler}
                        className={(errors.lastName && touched.lastName) ? "uncompleted" : "inputContainer"}
                        type="text"
                        name="lastName"
                        onFocus={focusHandler}
                        badgeStyle="inputTStyle"
                        icon="fa-light fa-users"
                        inputStyle="formInput"
                    />
                    {errors.lastName && touched.lastName && <span className='errorText' >{errors.lastName}</span>}
                </div>
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
                    <button type='submit' >ثبت نام</button>
                </div>
            </form>
        </div>
    );
};

export default SecondRegister;
