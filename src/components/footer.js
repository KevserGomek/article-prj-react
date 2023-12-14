import styles from '../styles/footer.module.css'
import { FaStarOfLife} from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaRss, FaVimeoV} from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
        <div className={styles.footerRow}>
            <div className={styles.contactSec}>
                <div className={styles.contactText}>
                    <h1>Genelia <span className={styles.footerStar}><FaStarOfLife/></span></h1>
                    <p>26985 Brighton Lane, 121 King Street</p>
                    <p>Melbourne, 3000, Australia </p> 
                    <p>+(122) 12 123 12345</p>
                </div>
            </div>

            <div className={styles.infoSec}>
                <ul className={styles.optionList}>
                    <h2>FEATURES</h2>
                    <li><a className={styles.option} href="">Archieve Page</a></li>
                    <li><a className={styles.option}  href="">Post Layout I</a></li>
                    <li><a className={styles.option} href="">Post Layout II</a></li>
                    <li><a className={styles.option}  href="">Post Layout III</a></li>
                </ul>
            </div>


            <div className={styles.infoSec}>
                <ul className={styles.optionList}>
                    <h2>MEMBERS</h2>
                    <li><a className={styles.option} href="">Signin</a></li>
                    <li><a className={styles.option}  href="">Signup</a></li>
                    <li><a className={styles.option} href="">Free Account</a></li>
                    <li><a className={styles.option}  href="">Paid Account</a></li>
                    </ul>
            </div>

            <div className={styles.infoSec}>
                <ul className={styles.optionList}>
                    <h2>ABOUT</h2>
                    <li><a className={styles.option} href="">Subscribe</a></li>
                    <li><a className={styles.option}  href="">Authors</a></li>
                    <li><a className={styles.option} href="">Contact Us</a></li>
                    <li><a className={styles.option}  href="">Privacy</a></li>
                </ul>
            </div>
        </div>

        <div className={styles.social}>
            <div className={styles.socialItems}>
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

            <div className={styles.socialText}>
                <p>Genelia 2023</p>
            </div>
        </div>

    </footer>
  )
}
export default Footer
