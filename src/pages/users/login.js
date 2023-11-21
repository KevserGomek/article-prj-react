import styles from '../../styles/login.module.css'
import {useRouter} from 'next/router';
import React, {useState} from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const router = useRouter();

    const clearInputs = () => {
        setEmail(''),
        setPassword('')
    }

    const loginUser = (e) => {
        e.preventDefault();

        if(email.length==0 || password.length==0){
            alert("Enter your email and password!");
            return false;
        }
        getUser();
        clearInputs();
        
    }

    const getUser = () => {
        fetch("https://650070e218c34dee0cd4e872.mockapi.io/users", {
            method:"GET",
        })
        .then (response => response.json())
        .then (users => {
            const registeredUser = users.filter(user => 
                user.email === email && user.password===password);
           
            if(registeredUser.length !== 0){
                router.push('/articles/list')
            }
        })  
    }

  return (
    <div className={styles.allPage}>
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <h2 className={styles.h2}>Login</h2>

                <div className={styles.invalid}>
                    <p>Opps! Your email or password is wrong!</p>
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>Email</label>
                    <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            className={styles.input}
                            value= {email} 
                            onChange = {(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className={styles.row}>
                    <label className={styles.label}>Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        className={styles.input}
                        value= {password} 
                        onChange = {(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className={styles.btnDiv}>
                    <button className={styles.submitBtn}
                    onClick ={loginUser}>Submit</button>
                </div>

            </form>
       
        </div>
    </div>
  )
}
export default Login


