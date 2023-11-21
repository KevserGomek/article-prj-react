import styles from '../styles/list.module.css'
import {FaTrash} from 'react-icons/fa'
import { useRouter } from 'next/router'

const DelBtn = (props) => {

  const router = useRouter()
  const removeArticle = (id) => {

    const url = "https://650070e218c34dee0cd4e872.mockapi.io/articles/"+id;

    fetch(url, {
      method:"DELETE",
    })
    .then(response => response.json())
    .then(()=> {
      props.getArticles();
    })
    
  }
  
  return (
    <>
    <FaTrash className={styles.del}
      onClick={() => removeArticle(props.articleId)} />
    </>
  )
}
export default DelBtn