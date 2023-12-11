//import Image from 'next/image'
import styles from '../styles/index.module.css'
//import '../styles/globals.css'
import {useRouter} from 'next/router';
import Navbar from '@/components/navbar';
import React, {useState, useEffect} from 'react'
import { FaStarOfLife, FaRegSnowflake } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { BsFillHexagonFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaRss, FaVimeoV} from "react-icons/fa";





export default function Home() {

  const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = () => {
        
        fetch("https://650070e218c34dee0cd4e872.mockapi.io/articles")
            .then (response => response.json())
            .then((json) => {
                setArticles(json)
            })
   }

  useEffect(() => {
    document.body.style.margin=0;
    document.body.style.padding=0;
  }, []);


  const router = useRouter()

  const goToViewPage = () =>{
    
    const id = props.articleId;
    const url = new URL('http://localhost:3000/articles/view?id='+id);
    const searchParams = url.searchParams;
    // router.push(url)
    console.log(id)
  }










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

      <div className={styles.featuredSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>FEATURED POSTS</h2>
          </div>

          <div className={styles.viewAllSec}>
            <a className={styles.viewAllBtn} href="">VIEW ALL</a>
          </div>
        </div>
      </div>
      


      <div className={styles.latestSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>LATEST POSTS</h2>
          </div>
        </div>


        <div className={styles.allPosts}>
          {articles.map ((article, i) => (
            <div className={styles.latestPost} key={i}>
              <div className={styles.postImg}><img src={article.image} class={styles.articleImg}></img></div>
              <div className={styles.postAuthor}></div>
              <div className={styles.postTitle}>
                <p className={styles.articleTitle} onClick={(goToViewPage)}>{article.title}</p></div>                    
            </div>
          ))}

        </div>

        <div className={styles.btnSec}>
          <button className={styles.loadBtn}>Load More</button>
        </div>
       




      </div>




      <div className={styles.missedSec}>
        <div className={styles.secRow}>
          <div className={styles.secTitle}>
            <span className={styles.hex}><BsFillHexagonFill/></span>
            <h2 className={styles.title}>IN CASE YOU MISSED IT!</h2>
          </div>
        </div>
      </div>



      <div className={styles.notifySec}>
        <div className={styles.notifyItem}><FaRegSnowflake/></div>
        <div className={styles.notifyTitle}>NEWLETTER</div>
        <div className={styles.notifyText}>Enter your email address and get <br/> regular update from us.</div>

        <div className={styles.emailCard}>
          <input className={styles.emailInput}/>
          <button className={styles.notifyBtn}>NOTIFY ME</button>
        </div>

      </div>



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
















    </div>


 
        
        
  </>  

    
    

  )
}


