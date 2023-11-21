import Navbar from "../../components/navbar"
import styles from '../../styles/view.module.css'
import React, {useState, useEffect} from 'react'

const ViewArticle = () => {

    const [selectedArticle, setSelectedArticle] = useState([])

    useEffect(() => {
        
        renderItems();
        
    }, []);

    const renderItems = () => {

        const url ="https://650070e218c34dee0cd4e872.mockapi.io/articles";
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
      
        fetch("https://650070e218c34dee0cd4e872.mockapi.io/articles/"+id)
            .then(response => response.json())
            .then((json)=> {
                setSelectedArticle(json)
                console.log(selectedArticle)
            })
            
    }
    
    return (
        <div>
            <Navbar/>
        
            <div className={styles.container}>
            
                <div className={styles["view-container"]}>
                    
                    <div className={styles["article-title"]}>
                        <h2>{selectedArticle.title}</h2>
                    </div>
                    <div className={styles["article-img"]} style={{display: selectedArticle.image ? 'block': 'none'}}>
                        <img src={selectedArticle.image}></img>
                    </div>

                    <div className={styles["article-description"]}>
                        <p>{selectedArticle.description}</p>
                    </div>

                </div>
 
            </div>
            
        </div>
    )
}
export default ViewArticle