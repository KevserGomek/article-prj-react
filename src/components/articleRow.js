import styles from '../styles/list.module.css'
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react'
import Buttons from "@/components/buttons"

const ArticleRow = () => {

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
    <>
      {articles.map ((article, i) => (
        <div className={styles.articleRow}>
          <div className={styles.imageSec} onClick={()=> goToViewPage(article.dataid)}>
              <img src={article.image} class={styles.articleImg} ></img>
           </div>

          <div className={styles.titleSec}>
              <div className={styles.title} onClick={()=> goToViewPage(article.dataid)}>
                  <h1>{article.title}</h1>
              </div>
              <div className={styles.btnSec}>
                  <Buttons articleId={article.dataid} getArticles={getArticles}></Buttons>
              </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default ArticleRow