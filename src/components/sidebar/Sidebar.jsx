import './sidebar.css';
import Image from './aboutMe.png'

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={Image} alt="" className="sideImg" />
        <p className="sideP">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat ad vero quod quidem harum veniam ducimus, libero minima aliquam eos nemo in rerum</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Art</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Life</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
          <i className=" sidebarIcon fa-brands fa-instagram"></i>
        </div>

      </div>
    </div>
  )
}
