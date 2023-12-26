import styles from '../../styles/login.module.css'
import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react'
import { FaFacebook, FaTwitter, FaRss, FaVimeoV} from "react-icons/fa";
import md5 from 'md5';

const Login = () => {

    useEffect(() => {
        document.body.style.margin=0;
        document.body.style.padding=0;
       
    }, []);

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const router = useRouter();

    const clearInputs = () => {
        setEmail(''),
        setPassword('')
    }

    const loginUser = (e) => {
        e.preventDefault();

        if(email.length==0 || password.length==0){
            alert("Enter your email and password!");
            clearInputs();
            return false;
        }
        getUser();
        clearInputs();
    }

    const getUser = () => {
        fetch("http://localhost:3001/users", {
            method:"GET",
        })
        .then (response => response.json())
        .then (users => {
            const registeredUser = users.filter(user => 
                user.email === email && user.password===md5(password));
           
            if(registeredUser.length !== 0){
                router.push('/')
            }else {
                setError(!error)
                clearInputs();
            }
        })  
        
       
    }

  return (
    
    <div className={styles.container}>
        <div className={styles.formSec}>
            <form className={styles.loginForm}>
                <h1>Genelia</h1>

               <div className={styles.welcomeText}>
                    <p>Welcome back!</p>
               </div>

               <div className="row">
                    <input 
                            placeholder='Email Address'
                            id="email" 
                            type="email" 
                            name="email" 
                            className={styles.input}
                            value= {email} 
                            onChange = {(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="row">
                    <input 
                        placeholder='Password'
                        id="password" 
                        type="password" 
                        name="password" 
                        className={styles.input}
                        value= {password} 
                        onChange = {(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className={styles.invalid} style={{display: error ? 'block' : 'none'}}>
                    <p>Opps! Your email or password is wrong!</p>
                </div>

                <div className="row">
                    <button className={styles.loginBtn} onClick ={loginUser}>Login</button>
                </div>

                <div className={styles.navSignup}>
                    <p>Don't have an account yet? <a href="./signup">Sign up</a></p>
                </div>
                
                <div className={styles.social}>
                    
                    <div className={styles.socialIcon}>
                        <FaFacebook />
                    </div>
               
                    <div className={styles.socialIcon}>
                        <FaTwitter />
                    </div>

                    <div className={styles.socialIcon}>
                        <FaRss />
                    </div>

                    <div className={styles.socialIcon}>
                        <FaVimeoV />
                    </div>

                </div>

            </form>

        </div>

        <div className={styles.imgSec}></div>

    </div>
  )
}
export default Login

