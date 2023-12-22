import styles from '../styles/articleCard.module.css'
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react'

const ArticleCard = () => {

  const [articles, setArticles] = useState([])
  const router = useRouter()

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = useCallback(async () => {
        const articleResponse = await fetch("http://localhost:3001/articles");
        const articles = await articleResponse.json();
        setArticles(articles)
    })

  const goToViewPage = (id) =>{
    const url = new URL('http://localhost:3000/articles/view?id='+id);
    router.push(url)
  }

  return (
        <div className={styles.allPosts}>
            {articles.map ((article, i) => (
                <div className={styles.latestPost} key={i}>
                    <div className={styles.postImg}><img src={article.image} class={styles.articleImg} onClick={()=> goToViewPage(article.dataId)}></img></div>
                    <div className={styles.postAuthor}></div>
                    <div className={styles.postTitle}>
                        <p className={styles.articleTitle} onClick={()=> goToViewPage(article.dataid)}>{article.title}</p></div>                    
                </div>
            ))}
        </div>
  )
}
export default ArticleCard


