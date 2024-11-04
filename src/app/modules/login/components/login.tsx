"use client"
import Image from "next/image";
import styles from "./login.module.css"
import eye from "../../../themes/images/eye.svg"
import close from "../../../themes/images/cross-ash.svg"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { loginApi } from "../services/api";

const Login = () => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const signIn = async(e:React.FormEvent)=>{
        e.preventDefault ();
        try {
            const response = await loginApi(userData);
            const {token } =response;
            sessionStorage.setItem("token", token);
            alert("Login successful!");
            router.push('/home')
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>


            <div className={styles.body}>

                <div className={styles.backgroundImage}>
                    <div className={styles.card}>
                        <Image src={close} alt="Close" className={styles.closeIcon} width={24} height={24} />
                        <h2 className={styles.heading}>Sign In</h2>
                        <div className={styles.inputfeildWrapper}>

                            <p className={styles.inName}>Email or Phone Number</p>
                            <input type="text" placeholder="" className={styles.inputField}  name="email"
                                value={userData.email}
                                onChange={handleChange}  />
                            <p className={styles.inName}>Password</p>
                            <div className={styles.passwordField}>
                                <input type="password" placeholder="" className={styles.inputField}  name="password"
                                    value={userData.password}
                                    onChange={handleChange}/>
                                <Image src={eye} alt="Show Password" className={styles.eyeIcon} width={24} height={24} />
                            </div>
                            <a href=""><button className={styles.signupButton} onClick={signIn}>Sign In</button> </a>
                            <p className={styles.signinText}>Already have an account? <a href="/register" className={styles.signinLink}>Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;