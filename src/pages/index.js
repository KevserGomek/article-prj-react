import styles from '../styles/index.module.css'
import Navbar from '@/components/navbar';
import React, {useEffect} from 'react'
import { FaStarOfLife, FaRegSnowflake } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { BsFillHexagonFill } from "react-icons/bs";
import ArticleCard from '@/components/articleCard';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    document.body.style.margin=0;
    document.body.style.padding=0;
  }, []);

  return (
  <>

    <Navbar/>

    <div className={styles.container}>
      <div className={styles.subSection}>
        <p>8 Days of John Bryce 
          <span className={styles.star}><FaStarOfLife/></span>
          <span className={styles.snow}><FaRegSnowflake/></span>
          home improvement just <br/> for you <span className={styles.subBtn}>Become a subscriber<span className={styles.sub}><IoIosLogIn /></span></span>
        </p>
      </div>

      {/* <div className={styles.featuredSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>FEATURED POSTS</h2>
          </div>
          <div className={styles.viewAllSec}>
            <a className={styles.viewAllBtn} href="">VIEW ALL</a>
          </div>
        </div>
      </div> */}
      
      <div className={styles.latestSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>LATEST POSTS</h2>
          </div>
          <div className={styles.viewAllSec}>
            <a className={styles.viewAllBtn} href="/articles/list">VIEW ALL</a>
          </div>
        </div>
        <ArticleCard />
        <div className={styles.btnSec}>
          <button className={styles.loadBtn}>Load More</button>
        </div>
      </div>

      {/* <div className={styles.missedSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>IN CASE YOU MISSED IT!</h2>
          </div>
        </div>
      </div> */}

      <div className={styles.notifySec}>
        <div className={styles.notifyItem}><FaRegSnowflake/></div>
        <div className={styles.notifyTitle}>NEWLETTER</div>
        <div className={styles.notifyText}>Enter your email address and get <br/> regular update from us.</div>
        <div className={styles.emailCard}>
          <input className={styles.emailInput}/>
          <button className={styles.notifyBtn}>NOTIFY ME</button>
        </div>
      </div>

      <Footer/>

    </div>
  </>  
  )
}


