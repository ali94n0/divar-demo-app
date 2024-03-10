import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import CheckOtp from 'components/templates/CheckOtp';
import SendOtp from 'components/templates/SendOtp';
import { checkOtpApi, getOtpApi } from 'services/authService';
import { setCookie } from 'utils/cookie';
import useUser from 'hooks/useUser';
import { getUserApi } from 'src/services/userService';



const AuthPage = () => {
    const [step, setStep] = useState(1)
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()

    // const {refetch} =useUser()
    
    


    const {isPending:isNumberSending,mutate:sendNumber } = useMutation({
        mutationFn: getOtpApi,
        onSuccess: (res) => {
            toast.success( "ارسال کد با موفقیت انجام شد")
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "ارسال کد با مشکل مواجه شد")
        }
    })

    const {isPending:isCheckingOtp , mutate:checkingOtp } = useMutation({
        mutationFn: checkOtpApi,
        onSuccess: (res) => {
            toast.success( "ورود با موفقیت انجام شد")
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "ورود با مشکل مواجه شد")
        }
    })


    const getOtpHandler =async (e) => {
        e.preventDefault()
        if (!number || number.length !== 11) {
            toast.error("شماره همراه معتبر نیست")
            return;
        } else {
            
            await sendNumber({ mobile: number }, {
                onSuccess: (data) => {
                    if (data) {
                        setStep(2)
                    }
                }
            })
        }
        
    }
    
    const sendOtpHandler = async (e) => {
        e.preventDefault();
        if (otp.length !== 5) {
            toast.error("طول کد تائید اشتباه است");
            return;
        } else {
            await checkingOtp({
                mobile: number,
                code : otp
            }, {
                onSuccess: (data) => {
                    if (data) {
                        setOtp("")
                        setNumber("")
                        //set tokens in cookie
                        setCookie(data)
                        //navigate to home page
                        navigate("/", { replace: true })
                        // refetch()
                        navigate(0)
                    }
                }
                
            })
        }
    }
    
    return (
        <div>
            {step === 1 && <SendOtp setStep={setStep} number={number} setNumber={setNumber} submitHandler={getOtpHandler} isPending={isNumberSending} />}
            {step === 2 && <CheckOtp setOtp={setOtp} otp={otp} number={number}  setStep={setStep} submitHandler={sendOtpHandler} isPending={isCheckingOtp}  />}
        </div>
    );
};

export default AuthPage;