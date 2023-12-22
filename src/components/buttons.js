import UpdateBtn from './updateBtn'
import DelBtn from './delBtn'
const Buttons = (props) => {
  
  return (
    <>
      <span><UpdateBtn articleId={props.articleId}/></span>
      <span><DelBtn getArticles={props.getArticles} articleId={props.articleId}/></span>
    </>
  )
}
export default Buttons

