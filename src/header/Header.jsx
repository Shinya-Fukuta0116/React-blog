import './header.css'
import Image from './art.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesSm'>Art & Music</span>
        <span className='headerTitlesLg'>Blog</span>
      </div>
      <img src={Image} alt="" className="headerImg" />

    </div>
  )
}
