export const validate = (data, type) => {

    const errors = {};

    if (type === "singUp") {

        if (!data.name.trim()) {
            errors.name = "نام را وارد کنید"
        } else {
            delete errors.name
        }

        if (!data.lastName.trim()) {
            errors.lastName = "نام خانوادگی را وارد کنید"
        } else {
            delete errors.lastName
        }

        if (!data.password) {
            errors.password = "رمز عبور را وارد کنید"
        } else if (data.password.length < 8) {
            errors.password = "حداقل 8 واژه وارد کنید"
        } else {
            delete errors.password
        }
    }


    if (type === "password") {
        if (!data.password) {
            errors.password = "رمز عبور را وارد کنید"
        } else if (data.password.length < 8) {
            errors.password = "حداقل 8 واژه وارد کنید"
        } else {
            delete errors.password
        }
    }
    if (type === "phoneNumber") {
        if (!data.phoneNumber) {
            errors.phoneNumber = "لطفا شماره را وارد کنید"
        } else if (data.phoneNumber.length < (10 || 11)) {
            errors.phoneNumber = "شماره نادرست است"
        } else {
            delete errors.phoneNumber
        }
    }

    if(type==="verify"){
        
    }

    return errors
}