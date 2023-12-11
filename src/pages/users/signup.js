import styles from '../../styles/signup.module.css'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router';
import { FaFacebook, FaTwitter, FaRss, FaVimeoV} from "react-icons/fa";

const SignUp = () => {



    useEffect(() => {
        document.body.style.margin=0;
        document.body.style.padding=0;
       
    }, []);

    const [firstName,setFirstName] = useState('')
    const [surname,setSurname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const regName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const regSurname = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;



    const [errors,setErrors] = useState({
        nameError:true,
        surnameError:true,
        emailError:true,
        passwordError:true
    })

    useEffect(() => {
        setErrors({...errors, nameError:firstName.length<=0 || regName.test(firstName)})
    }, [firstName]);

    useEffect(() => {
        setErrors({...errors, surnameError:surname.length<=0 || regSurname.test(surname)})
    }, [surname]);


    useEffect(() => {
        setErrors({...errors, emailError:email.length<=0 || !regEmail.test(email)})
    }, [email]);

    useEffect(() => {
        setErrors({...errors,  passwordError: !regPassword.test(password)})
    }, [password]);

    const router = useRouter();

    const clearInputs = () => {
        setFirstName(''),
        setSurname(''),
        setEmail(''),
        setPassword('')
    }

    const validateName = () => {
        if (firstName=="" || regName.test(firstName)){
            
            return false
        }
        return true
    }

    const validateSurname = () => {
        if (surname=="" || regSurname.test(surname)){
            errors.surnameError==false;
            return false
        }
        return true
    }
    const validateEmail = () => {
        if (surname=="" || !regEmail.test(email)){
            return false
        }
        return true
    }

    const validatePassword = () => {
        if (!regPassword.test(password)){
            return false
        }
        return true
    }

    const signupUser = (e) =>{
        e.preventDefault();
        

        if(validateName()&& validateSurname() && validateEmail()&& validatePassword() ){

            postUsers();
        }else{
            
           clearInputs();
        }

        
    }
    function getId() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
  


   const postUsers = () => {
        console.log("ba")

        fetch("https://650070e218c34dee0cd4e872.mockapi.io/users", {
            method:"POST",
            body: JSON.stringify ({
                id: getId(),  
                firstName:firstName,
                surname:surname,
                email:email,
                password:password
            }),
            headers: {
                "Content-type": "application/json ; charset=UTF-8"
            }

        })
        .then (response => response.json())
        .then(() => router.push('/users/login'))
        
   }

    return (
        // <div className={styles.page}>
        //     <div className={styles.container}>
        //         <form className={styles.signUpForm}>
        //             <h2 className={styles.h2}>Sign Up</h2>

        //             <div className={styles.row}>
        //                 <label className={styles.label}>First Name</label>
        //                 <input
        //                     className={styles.input}
        //                     value={firstName}
        //                     onChange={(e) => setFirstName(e.target.value)} />
        //                 {
        //                 errors.nameError && <p className={styles.invalid}>*Please, enter a valid first name !</p>
        //                 }

        //             </div>

        //             <div className={styles.row}>
        //                 <label className={styles.label}>Last Name</label>
        //                 <input
        //                     className={styles.input}
        //                     value={surname}
        //                     onChange={(e) => setSurname(e.target.value)} />
        //                 {
        //                 errors.surnameError && <p className={styles.invalid}>*Please, enter a valid last name !</p>
        //                 }
        //             </div>


        //             <div className={styles.row}>
        //                 <label className={styles.label}>Email</label>
        //                 <input
        //                     id="email"
        //                     type="email"
        //                     name="email"
        //                     className={styles.input}
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)} />
        //                 {
        //                 errors.emailError && <p className={styles.invalid}>*Please, enter a valid email !</p>
        //                 }

        //             </div>

        //             <div className={styles.row}>
        //                 <label className={styles.label}>Password</label>
        //                 <input
        //                     id="password"
        //                     type="password"
        //                     name="password"
        //                     className={styles.input}
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)} />
        //                 {
        //                 errors.passwordError && <p className={styles.invalid}>*Your password must contain at least one letter, one numberic digit and must be 8 characters.</p>
        //                 }
        //             </div>

        //             <div className={styles.btnDiv}>
        //             <button
        //                 className={styles.submitBtn}
        //                 onClick={signupUser}>Submit</button>
        //             </div>

        //         </form>
        //     </div>
        // </div>
        <div className={styles.container}>
            <div className={styles.formSec}>
                <form className={styles.loginForm}>
                    <h1>Genelia</h1>

                    <div className={styles.welcomeText}>
                        <p>Create Account</p>
                    </div>

                    <div className="row">
                        <input
                            placeholder='First Name'
                            className={styles.input}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        {
                        errors.nameError && <p className={styles.invalid}>*Please, enter a valid first name !</p>
                        }
                    </div>

                    <div className="row">
                        <input
                            placeholder='Last Name'
                            className={styles.input}
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)} 
                        />

                        {
                        errors.surnameError && <p className={styles.invalid}>*Please, enter a valid last name !</p>
                        }
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
                        {
                        errors.emailError && <p className={styles.invalid}>*Please, enter a valid email !</p>
                        }
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
                        {
                        errors.passwordError && <p className={styles.invalid}>*Your password must contain at least one letter, one numberic digit and must be 8 characters.</p>
                        }
                    </div>

                    

                    

                    <div className="row">
                        <button className={styles.loginBtn} onClick={signupUser}>Signup</button>
                    </div>

                    <div className={styles.navSignup}>
                        <p>Already have an account? <a href="./login">Sign in</a></p>
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


            <div className={styles.imgSec}>
            
            </div>

        </div>
    )
  }
  export default SignUp
