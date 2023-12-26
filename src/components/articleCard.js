import styles from '../styles/articleCard.module.css'
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react'

const ArticleCard = () => {

  const router = useRouter()
  const [articles, setArticles] = useState([])
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    getArticles();
  }, [offset]);

  const getArticles = async () => {
    try {
      const response = await fetch(`http://localhost:3001/page?offset=${offset}&limit=${limit}`);
      const jsonArticles = await response.json();
      setArticles([...articles, ...jsonArticles]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };
  
  const goToViewPage = (id) =>{
    const url = new URL('http://localhost:3000/articles/view?id='+id);
    router.push(url)
  }

  
  

  
  return (
        <div className={styles.allPosts}>
             {articles.map ((item, i) => (
                <div className={styles.latestPost} key={i}>
                    <div className={styles.postImg}><img src={item.image} class={styles.articleImg} onClick={()=> goToViewPage(item.dataid)}></img></div>
                    <div className={styles.postAuthor}>By- {item.firstname} {item.surname}</div>
                    <div className={styles.postTitle}>
                        <p className={styles.articleTitle} onClick={()=> goToViewPage(item.dataid)}>{item.title}</p></div>                    
                </div>
            ))}
          {/* <div className={styles.btnSec}>
            <button className={styles.loadBtn} onClick={()=> handleLoadMore}>Load More</button>
          </div> */}
        </div>
  )
}
export default ArticleCard


