import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: [],
      name: '',
      comment: '',
    }
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  likedFun = id => {
    this.setState(prevObj => ({
      commentList: prevObj.commentList.map(eachItem => {
        if (eachItem.id === id) {
          console.log({...eachItem, isLiked: !eachItem.isLiked})
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteFun = id => {
    this.setState(prevObj => ({
      commentList: prevObj.commentList.filter(eachItem => eachItem.id !== id),
    }))
  }

  commentChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = () => {
    const {name, comment} = this.state
    if (name === '' || comment === '') {
      alert('input fields should not be empty.')
    } else {
      this.setState(prevObj => ({
        commentList: [
          ...prevObj.commentList,
          {
            id: uuidv4(),
            name,
            comment,
          },
        ],
        name: '',
        comment: '',
      }))
    }
  }

  render() {
    const {commentList, comment, name} = this.state
    let count = 0
    return (
      <div className="bgContainer">
        <div className="topContainer">
          <div className="commentContainer">
            <h1 className="headingMain">Comments</h1>
            <p className="subHeading">Say somthing about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="inpulName"
              onChange={this.nameChange}
              id="name"
              type="text"
              value={name}
            />
            <br />
            <textarea
              placeholder="Your Comment"
              maxLength={250}
              className="inpulComment"
              onChange={this.commentChange}
              id="comment"
              type="text"
              value={comment}
            />
            <br />
            <button className="button" onClick={this.addComment}>
              Add Comment
            </button>
          </div>
          <div className="imgContainer">
            <img
              className="commentImage"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <hr />
        <p className="countContainer">
          <span className="count">{commentList.length}</span> Comments
        </p>
        <ul className="ulList">
          {commentList.map(eachItem => {
            if (count === initialContainerBackgroundClassNames.length) {
              count = 0
            }
            const commentEl = (
              <CommentItem
                style1={initialContainerBackgroundClassNames[count]}
                key={eachItem.id}
                details={eachItem}
                likedFun={this.likedFun}
                deleteFun={this.deleteFun}
              />
            )
            count += 1
            return commentEl
          })}
        </ul>
      </div>
    )
  }
}
export default Comments
