import Navbar from "../../components/navbar"
import styles from '../../styles/view.module.css'
import React, {useState, useEffect, useCallback} from 'react'
import Footer from '@/components/footer';

const ViewArticle = () => {

    const [selectedArticle, setSelectedArticle] = useState([])

    const getSelectedArticle = useCallback(async () => {
        const url ="https://650070e218c34dee0cd4e872.mockapi.io/articles";
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const articleResponse = await fetch("https://650070e218c34dee0cd4e872.mockapi.io/articles/"+id);
        const selectedArticle = await articleResponse.json();
        setSelectedArticle(selectedArticle)
    })

    useEffect(() => {
        document.body.style.margin=0;
        document.body.style.padding=0;
          
        getSelectedArticle(); 
    }, []);

    return (
        <>
            <Navbar/>

            <div className={styles.container}>
                <div className={styles.titleSec}>
                    <div className={styles.articleImg}>
                        <img src={selectedArticle.image}></img>
                    </div>

                    <div className={styles.articleTitle}>
                        <h1>{selectedArticle.title}</h1>
                    </div>
                </div>

                <div className={styles.contentSec}>
                    <div className={styles.articleDesc}>
                        <p>{selectedArticle.description}</p>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default ViewArticle