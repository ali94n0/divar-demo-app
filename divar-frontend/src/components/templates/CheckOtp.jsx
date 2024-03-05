

const CheckOtp = ({otp ,setOtp,submitHamdler,setStep}) => {
    return (
        <div>
            <h2>
                تائید کد پیامک شده
            </h2>
            <form onSubmit={submitHamdler}>
                <div>
                    <label htmlFor="otp">کد تائید را وارد کنید</label>
                    <input type="number" id="otp" name="otp" required value={otp} onChange={(e)=>setOtp(e.target.value)} />
                </div>
                <button type="submit">ورود</button>
            </form>
            <button onClick={()=>setStep(1)}>تغییر شماره همراه</button>
        </div>
    );
};

export default CheckOtp;