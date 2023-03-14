import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <form className="witeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-regular fa-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{ display: "none" }} />
          <input type="text" placeholder='Title' className='witeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type="text" className='wrtieInput witeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>

    </div>
  )
}
