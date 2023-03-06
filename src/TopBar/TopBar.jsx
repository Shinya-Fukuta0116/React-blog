import './TopBar.css'
import Image from './prof.png'

export default function TopBar() {
  return (
    <div className="top">
      <div className=' topIcon topLeft'>
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-linkedin"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src={Image} alt="" />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
