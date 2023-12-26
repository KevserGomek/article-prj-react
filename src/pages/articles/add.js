import Navbar from "../../components/navbar"
import styles from '../../styles/add.module.css'
import React, {useState, useEffect, useCallback} from 'react'
import { useRouter } from 'next/router'
import Footer from "@/components/footer"

const AddArticle = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const [selectedUserId,setSelectedUserId] = useState('')

    const [users, setUsers] = useState([])
       useEffect(() => {
        getUsers();
    }, []);
       const getUsers = useCallback(async () => {
        const userResponse = await fetch("http://localhost:3001/users");
        const users = await userResponse.json();
        setUsers(users)
    })


    const router = useRouter();

    useEffect(() => {
        document.body.style.margin=0;
        document.body.style.padding=0;
      }, []);

    const add = (e) => {
        e.preventDefault();
        
        if(image.length ==0){
            confirm("Are you sure you don't want to upload an image?");
        }

        if(title.length !== 0 && description.length !==0 && selectedUserId.length !==0){
            postArticles();
            clearInputs();
            return false;
        }else{
            alert("Please, write something and you must select author! ");
            clearInputs();
            return false;
        }

    }

    const clearInputs = () => {
        setTitle(''),
        setDescription(''),
        setImage('')
    }

    function getId() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    
    const postArticles = () => {

        fetch("http://localhost:3001/articles", {
            method:"POST",
            body: JSON.stringify ({
                id: getId(),
                title:title,
                description:description,
                image: image,
                user_id: selectedUserId
            }),
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
                <form className={styles.addForm}>
                    <div className={styles.formRow}>
                        <input 
                            type="text" 
                            id={styles["title"]} 
                            placeholder="The Title"
                            value= {title} 
                            onChange = {(e) => setTitle(e.target.value)} 
                        />
                    </div>
          
                    <div className={styles.formRow}>
                        <textarea 
                            id={styles["description"]} 
                            name="description" 
                            placeholder="Write article content here..."
                            value= {description} 
                            onChange = {(e) => setDescription(e.target.value)} 
                        />
                    </div>

                    <div className={styles.formRow}>
                        <select className={styles.authorBox}  onChange={(e) => setSelectedUserId(e.target.value)}>
                            <option value="" disabled selected hidden>The Author</option>
                            {users.map ((user) => (
                                <option key={user.dataid} value={user.dataid} >{`${user.firstname} ${user.surname}`}</option>
                            ))}
                            
                        </select>
                    </div>


                    <div className={styles.formRow}>
                        <input 
                            type="file" 
                            id={styles["img-file"]} 
                            name="filename"
                            value= {image} 
                            onChange = {(e) => setImage(e.target.value)} 
                        />
                    </div>
           
                    <div className={styles.formRow}>
                        <button 
                            className={styles["submit-btn"]}
                            onClick ={add}>Submit</button>
                    </div>
                </form>
            </div>

            <Footer/>
        </div>
    )
}
export default AddArticle



