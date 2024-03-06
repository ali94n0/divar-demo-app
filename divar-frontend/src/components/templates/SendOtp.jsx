import styles from "components/templates/SendOtp.module.css"

const SendOtp = ({number,setNumber,submitHandler,isPending}) => {
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.form}>
            <h2>
                ورود به حساب کاربری
            </h2>
            <p>برای استفاده از امکانات دیوار، لطفا شماره همراه خود را وارد کنید.کد تائید به این شماره پیامک خواهد شد.</p>
                <label htmlFor="number">شماره همراه خود را وارد کنید</label>
                <input dir="ltr" id="number" name="number" required placeholder="09---------" value={number} onChange={(e) => setNumber(e.target.value)} type="number" />
                <button type="submit" disabled={isPending}>ارسال</button>
            </form>
        </div>
    );
};

export default SendOtp;