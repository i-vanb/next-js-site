'use client';
import styles from "./SignIn.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import {API} from "@/API";

export const SignIn = () => {
    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [err, setErr] = useState<string>('');
    const [verify, setVerify] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('temp');
        const exp = localStorage.getItem('temp_exp');

        if(token && exp && parseInt(exp) > Date.now()) {
            setVerify(true);
        }
    }, []);

    const setPassHandler = (e: ChangeEvent<HTMLInputElement>) => {
        err && setErr('');
        setPass(e.target.value);
    }

    const setLoginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        err && setErr('')
        setLogin(e.target.value);
    }
    const setCodeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        err && setErr('')
        setCode(e.target.value);
    }

    const submitHandler = async () => {
        const {error, emailToken, expireAt} = await API.auth.login(login, pass);

        if(error) {
            setErr(error);
        } else {
            localStorage.setItem('temp', emailToken)
            localStorage.setItem('temp_exp', expireAt)
            setVerify(true);
        }
    }
    const confirmHandler = async () => {
        const data = await API.auth.verify(code);
        if(data) {
            // localStorage.setItem('temp', data.emailToken)
            // localStorage.setItem('temp_exp', data.expireAt)
        }
    }

    return (
        <div className={styles.wrapper}>
            {verify
                ? <div className={styles.form}>
                    <input type="text" placeholder="code" value={code} onChange={setCodeHandler}/>
                    <button onClick={confirmHandler}>confirm</button>
                </div>
                : <div className={styles.form}>
                    <input type="text" placeholder="login" value={login} onChange={setLoginHandler}/>
                    <input type="password" placeholder="password" value={pass} onChange={setPassHandler}/>
                    <button onClick={submitHandler}>sign in</button>
                </div>
            }
            {err && <div>{err}</div>}
        </div>
    )
}
