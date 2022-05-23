// == import 
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../actions/comments';

// npm

// local

// style
import './comment.scss'

function Comment( {id, content, pseudo} ) {

  const dispatch = useDispatch();
  function handleDeleteSubmit (evt) {
    evt.preventDefault();
    dispatch(deleteComment(id));
  }

  return(
    <div className="commentCard" key={id}>
      <div className="commentCard_comments">
        <span className="commentCard-comments_span">
          <h3>Commentaires</h3>
          <p className="commentCard-comments_comment">{content}</p>          
        </span>
        <span className="commentCard-comments_span">
          <h3>Pseudo</h3>
          <p className="commentCard-pseudo_name">{pseudo}</p>        
        </span>
      </div>
        <div className="commentCard-config-btn" >
          <button
          className="commentCard-config_delete commentCard-config_btn"
          onClick = {handleDeleteSubmit}
          >Supprimer</button>
        </div>
    </div>
  )
}

export default Comment;