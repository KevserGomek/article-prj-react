import Navbar from "../../components/navbar"
import Footer from "@/components/footer"
import styles from '../../styles/list.module.css'
import React, {useEffect} from 'react'
import ArticleRow from "@/components/articleRow"
import { MdAddCircle } from "react-icons/md"
import { useRouter } from 'next/router'

const ListArticle = () => {

    const router = useRouter()

    useEffect(() => {
        document.body.style.margin=0;
        document.body.style.padding=0;
      }, []);

    return (
        <>
            <Navbar/>

            <div className={styles.container}>
                
                <div className={styles.header}>
                    <h2> ALL ARTICLES </h2>
                    <span className={styles.addBtn} onClick ={() => router.push('../articles/add')}> <MdAddCircle /></span>
                </div>
                
                <ArticleRow/>
    
            </div>

            <Footer/>
        </>
    )
}
export default ListArticle