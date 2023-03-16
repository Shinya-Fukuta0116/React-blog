import './write.css'
import Image from './Royce59.png'

export default function Write() {
  return (
    <div className='write'>
      <img className='writeImg' src={Image} alt="" />
      <form className="witeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-regular fa-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{ display: "none" }} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>

    </div>
  )
}
