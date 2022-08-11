const Contact = () => {
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">تماس با ما</h1>
                            <h2 className="page-description">پیشرفت ما را مدیون نظرات شما هستیم</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>ایمیل</h5>
                                        <h6>info@info.com</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>آدرس</h5>
                                        <h6>مازندران - رامسر - رمک </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>موبایل</h5>
                                        <h6>01155264690</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row flex-row-reverse text-end mt-5">
                                <div className="col-lg-6">
                                    <label>نام و نام خانوادگی</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>شماره موبایل</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>عنوان</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>متن پیام</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact">ارسال پیام</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact