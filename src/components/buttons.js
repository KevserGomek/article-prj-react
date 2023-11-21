import UpdateBtn from './updateBtn'
import DelBtn from './delBtn'
import ViewBtn from './viewBtn'
const Buttons = (props) => {
  
  return (
    <>
      <span><UpdateBtn articleId={props.articleId}/></span>
      <span><DelBtn getArticles={props.getArticles} articleId={props.articleId}/></span>
      <span><ViewBtn getArticles={props.getArticles} articleId={props.articleId}/></span>
    </>
  )
}
export default Buttons

