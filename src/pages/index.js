//import Image from 'next/image'
import styles from '../styles/index.module.css'
//import '../styles/globals.css'
import {useRouter} from 'next/router';


export default function Home() {

  const router = useRouter();

  return (
    <>
     
      <div className={styles.container}>
          <div className={styles.optionCard}>
              <h2 className={styles.hello}>Hello!</h2>
              <div className={styles.row}>
                <p>We miss you!</p>
                <button class={styles.loginBtn} 
                  onClick={() => router.push('/users/login')}>Login</button>
              </div>

              <div className={styles.row}>
                <p>Don't have an account? Join Us!</p>
                <button class={styles.signupBtn}
                  onClick={() => router.push('/users/signup')}>Sign Up</button>
              </div>
          </div>
      </div>
    </>

  )
}


