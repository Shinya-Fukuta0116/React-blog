import './sidebar.css';
import Image from './aboutMe.png'
import Calendar from 'react-calendar';
import BlackImage from './Black.png';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Sidebar() {
  const [showImage, setShowImage] = useState(false); // useStateを正しく使う
  const tileContent = ({ date, view }) => {
    if (date.getDate() === 4 && date.getMonth() === 3) {
      return (
        <div className='sidebarCalendar'
          onMouseEnter={() => setShowImage(true)} // ホバーしたら画像を表示
          onMouseLeave={() => setShowImage(false)} // ホバーが外れたら画像を非表示
          style={{ maxWidth: '600px' }}
        >
          <Link to={`/calendar/${date.toISOString().slice(0, 10)}`}>
            <p style={{ fontSize: '10px' }}>Currensy</p>
          </Link>
          {showImage && ( // showImageがtrueの場合に画像を表示
            <img src={BlackImage} alt="Currency" style={{ width: '100%', height: 'auto' }} />
          )}
        </div>
      );
    } else {
      return null;
    }
  };

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
        <span className="sidebarTitle">CALENDAR</span>
        <div className="sidebarCalendar">
          <Calendar locale="en-US" tileContent={tileContent} />
        </div>
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
