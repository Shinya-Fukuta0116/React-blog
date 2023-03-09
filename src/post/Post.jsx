import './post.css'
import Image from './kid.jpg'

export default function Post() {
  return (
    <div className='container'>
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
      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis illum vero, esse provident alias quibusdam beatae corrupti veritatis culpa natus atque, iste tempora neque consequatur tempore, optio ex itaque!
      </p>
    </div>
  )
}
