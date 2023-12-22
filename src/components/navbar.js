import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
const Navbar = () => {

  const router = useRouter()

  return (
    <div>

      <nav className={styles.navbar}> 
        <div className={styles.navbarTitle}>
          <h1>Genelia</h1>
        </div>

        <ul className={styles.navBtnList}>
          <li><a className={styles.navBtn} href="">Style Guides</a></li>
          <li><a className={styles.navBtn}  href="">Features</a></li>
          <li><a className={styles.navBtn} href="">Membership</a></li>
          <li><a className={styles.navBtn}  href="">Tags</a></li>
          <li><a className={styles.navBtn}  href="">More...</a></li>        
        </ul>
        
        <ul className={styles.icons}>
          <li><FaSearch className={styles.searchBtn} /></li>
          <li><MdOutlineDarkMode className={styles.themeBtn} /></li>
          <li><FaSignInAlt className={styles.loginBtn} onClick={() => router.push('../users/login')}/></li>
        </ul>
      </nav>

    </div>
  )
}
export default Navbar





