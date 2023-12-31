import Navbar from "../../components/navbar"
import styles from '../../styles/add.module.css'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const EditArticle = () => {

    const router = useRouter();

    const url ="http://localhost:3001/articles";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const [values, setValues] = useState({
        dataid: id,
        title:'',
        description:''
    })

    useEffect(() => {
        renderItems();
    }, []);

    const renderItems = () => {

        fetch("http://localhost:3001/articles/"+id)
            .then(response => response.json())
            .then((json)=> {
                setValues({...values, title:json.title, description:json.description})
                  
            })
    }

    const updateArticle = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/articles/"+id, {
            method:"PUT",
            body: JSON.stringify (values),
            headers: {
                "Content-type": "application/json ; charset=UTF-8"
            }

        })
        .then (response => response.json())
        .then(() => router.push('/articles/list'))
   }

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                <form onSubmit={updateArticle} className={styles.addForm}>
                    <div className={styles.formRow}>
                        <input 
                            type="text" 
                            id={styles["title"]} 
                            value= {values.title} 
                            onChange = {(e) => setValues({...values,title:e.target.value})} 
                        /> 
                    </div>
          
                    <div className={styles.formRow}>
                        <textarea 
                            id={styles["description"]} 
                            name="description" 
                            value= {values.description} 
                            onChange = {(e) => setValues({...values,description:e.target.value})} 
                        />
                    </div>
                    
                    <div className={styles.formRow}>
                        <input 
                            type="file" 
                            id={styles["img-file"]} 
                            name="filename"
                            value= {values.image} 
                            onChange = {(e) => setValues({...values,description:e.target.value})} 
                        />
                    </div>
           
                    <div className={styles.formRow}>
                        <button 
                            className={styles["submit-btn"]}>Submit</button>
                    </div>
            
                </form>
            </div>
        </div>
    )
}
export default EditArticle