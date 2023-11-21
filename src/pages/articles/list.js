import Navbar from "../../components/navbar"
import styles from '../../styles/list.module.css'
import React, {useState, useEffect} from 'react'
import Buttons from "@/components/buttons"

const ListArticle = () => {

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

    return (
        <div className={styles.allPage}>
            <Navbar/>
           
            <div className={styles.container}>
                <div className={styles["article-container"]}>
                    <h2>The Article List</h2>
                
                    <div className={styles["table-section"]}>
                        <table id={styles["article-list"]}>
                            <tbody>
                                <tr className={styles["table-titles"]}>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th className={styles["buttons"]}>Buttons</th>
                                </tr>

                                {articles.map ((article, i) => (
                                    <tr className={styles["article-information"]} key={i}>
                                        <td>{article.title}</td>
                                        <td>{article.description}</td>
                                        <td><Buttons articleId={article.dataId}
                                                     getArticles={getArticles}>
                                            </Buttons></td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListArticle