// == import

// npm
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../actions/comments"

// local
import Comment from "./Comment/Comment";
// style

function Comments () {
  // id, content, id_user
  const dispatch = useDispatch();
  const commentsData = useSelector((state) => state.comments.commentList)
  useEffect(() => {
    dispatch(fetchComments())
  },[])

  console.log(commentsData);

  return(
    <section className='allUser'>
      <h1 className='allSpots_h1'>Tous les commentaires</h1>
      
      {commentsData.map((item) => {
        return (
          <Comment {...item} key={item.id} />
        )
      })}
    </section>
  )
}

export default Comments;