import styles from '../styles/list.module.css'
import {FaPenSquare} from 'react-icons/fa'
import { useRouter } from 'next/router'

const UpdateBtn = (props) => {

  const router = useRouter()

  const goToEditPage = () =>{
    
    const id = props.articleId;
    const url = new URL('http://localhost:3000/articles/edit?id='+id);
    const searchParams = url.searchParams;
    router.push(url)

  }
  return (
    <>
    <FaPenSquare className={styles.update} 
      onClick={goToEditPage}/>
    </>
  )
}
export default UpdateBtn