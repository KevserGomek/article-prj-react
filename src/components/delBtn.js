import styles from '../styles/list.module.css'
import {FaTrash} from 'react-icons/fa'
import { useRouter } from 'next/router'

const DelBtn = (props) => {

  const router = useRouter()
  const removeArticle = (id) => {

    const url = "http://localhost:3001/articles/"+id;

    fetch(url, {
      method:"DELETE",
    })
    .then(response => console.log(response))
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