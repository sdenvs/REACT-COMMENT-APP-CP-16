// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {style1, details, likedFun, deleteFun} = props
  const {name, comment, isLiked, id} = details
  const liked = () => {
    likedFun(id)
  }
  const deleteComment = () => {
    deleteFun(id)
  }

  return (
    <li className="commentItem">
      <div className="style2">
        <div>
          <p className={`${style1} icon`}>{name[0]}</p>
        </div>
        <div className="style4">
          <div className="style3">
            <p className="name">{name}</p>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>

          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="functionStyle">
        <button onClick={liked} className="likeContainer">
          <img
            className="likeImg"
            alt="like"
            src={
              isLiked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
          />
          <p className={isLiked ? 'liked' : 'notliked'}>Like</p>
        </button>
        <button
          testid="delete"
          onClick={deleteComment}
          className="likeContainer"
        >
          <img
            alt="delete"
            className="deleteButton"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
