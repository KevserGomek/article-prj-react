'use client'
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter()
    
  return (
    <div>
        <nav className={styles.navbar}>
            <h1 className={styles.title}>MyArticles</h1>
            <ul>
                <li><button className={styles.listBtn} onClick={() => router.push('../articles/list')}>List Articles</button></li>
                <li><button className={styles.addBtn}  onClick ={() => router.push('../articles/add')}>Add an Article</button></li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar
