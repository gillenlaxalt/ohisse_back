// == import 

// npm

// local

// style

function Comment() {
  return(
    <div className="commentCard" key='id'>
      <div className="commentCard_comments">
        <p className="commentCard-comments_comment">content</p>
        <p className="spotCard-identity_city">name</p>
      </div>
        <div className="spotCard-config-btn" >
          <button
          className="spotCard-config_delete spotCard-config_btn"
          // onClick = {handleDeleteSubmit}
          >Supprimer</button>
        </div>
    </div>
  )
}

export default Comment;