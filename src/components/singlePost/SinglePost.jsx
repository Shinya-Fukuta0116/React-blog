import './singlePost.css'
import Image from './BookD.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="siglePostWrapper">
        <img src={Image} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
            Author: <b>Vinvlo</b>
          </span>
          <span className='singlePostDate'> 1 hour ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur voluptatum perferendis dolore asperiores modi
          consectetur hic minus facilis in eaque suscipit cum quisquam
          praesentium vel necessitatibus accusantium tenetur, officia ducimus.
          Consequuntur voluptatum perferendis dolore asperiores modi
          consectetur hic minus facilis in eaque suscipit cum quisquam
          praesentium vel necessitatibus accusantium tenetur, officia ducimus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem
          debitis minima expedita maiores, hic repellat iure, est culpa inventore,
          eius ducimus exercitationem nostrum reprehenderit enim accusamus doloremque
          rem officiis?

        </p>
      </div>

    </div>
  )
}
