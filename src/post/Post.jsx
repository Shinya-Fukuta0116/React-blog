import './post.css'
import Image from './kid.jpg'

export default function Post() {
  return (
    <div>
      <img src={Image} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  )
}
