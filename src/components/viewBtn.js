import styles from '../styles/list.module.css'
import {FaReadme} from 'react-icons/fa'
import { useRouter } from 'next/router'

const ViewBtn = (props) => {

  const router = useRouter()

  const goToViewPage = () =>{
    
    const id = props.articleId;
    const url = new URL('http://localhost:3000/articles/view?id='+id);
    const searchParams = url.searchParams;
    router.push(url)
    
  }
  return (
    <>
    <FaReadme className={styles.view}
      onClick={goToViewPage} />
    </>
  )
}
export default ViewBtn