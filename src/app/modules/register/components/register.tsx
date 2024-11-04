"use client"
import styles from './register.module.css'
import eye from "../../../themes/images/eye.svg"
import close from "../../../themes/images/cross-ash.svg"
import Image from "next/image"
import { registerApi } from '../services/api'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
const Register = () => {
const router = useRouter();

    const [userData, setUserData] = useState({
        username: "",
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
    const signUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerApi(userData)
            console.log(response);
            router.push('/')
           

        } catch (error) {
            console.log(error,"Registration failed");

        }
    }

    return (
        <>
            <div className={styles.body}>

                <div className={styles.backgroundImage}>
                    <div className={styles.card}>
                        <Image src={close} alt="Close" className={styles.closeIcon} width={24} height={24} />
                        <h2 className={styles.heading}>Sign Up</h2>
                        <div className={styles.inputfeildWrapper}>
                            <p className={styles.inName}>Name</p>
                            <input type="text" placeholder="" className={styles.inputField} name="username"
                                value={userData.username} onChange={handleChange} />

                            <p className={styles.inName}>Email or Phone Number</p>
                            <input type="text" placeholder="" className={styles.inputField} name="email"
                                value={userData.email}
                                onChange={handleChange} />
                            <p className={styles.inName}>Password</p>
                            <div className={styles.passwordField}>
                                <input type="password" placeholder="" className={styles.inputField} name="password"
                                    value={userData.password}
                                    onChange={handleChange} />
                                <Image src={eye} alt="Show Password" className={styles.eyeIcon} width={24} height={24} />
                            </div>

                            <button className={styles.signupButton} onClick={signUp}>Sign Up</button>
                            <p className={styles.signinText}>Already have an account? <a href="/"
                                className={styles.signinLink}>Sign In</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;