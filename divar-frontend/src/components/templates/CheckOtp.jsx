import styles from "components/templates/CheckOtp.module.css"


const CheckOtp = ({otp ,setOtp,submitHandler,setStep,isPending,number}) => {
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.form}>
            <h2>
                تائید کد پیامک شده
            </h2>
                <p>کد تائید ۵ رقمی ارسال شده به شماره  {number} را وارد کنید.</p>
                    <label htmlFor="otp">کد تائید را وارد کنید</label>
                    <input placeholder="کد تايید ۵ رقمی" type="number" id="otp" name="otp" required value={otp} onChange={(e)=>setOtp(e.target.value)} />
                
                <button type="submit">ورود</button>
            <button className={styles.back_btn} disabled={isPending} onClick={()=>setStep(1)}>تغییر شماره همراه</button>
            </form>
        </div>
    );
};

export default CheckOtp;