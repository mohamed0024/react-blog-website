import './Footer.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Trending', path: '/#trending' },
  { name: 'All News', path: '/posts' }
]

const socialMedia = [
  { social: 'Gmail', link: '#' },
  { social: 'Instagram', link: '#' },
  { social: 'Facebook', link: '#' },
  { social: 'Telegram', link: '#' }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="logo" src={logo} alt="NewsUp-logo" />

        <div className="container2">

        <div className="footer-links">
            <p className='title'>Quick links</p>
            <ul>
                {links.map((item) => (
                <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
                ))}
            </ul>
        </div>

        <div className="about-us">
            <p className='title'>About us</p>
            <p className="description">
                NewsUp is a modern blog platform built to keep you informed, inspired, and ahead of the curve.
                We bring you the latest stories, trends, and insights across a wide range of topics
            </p>
        </div>

        <div className="contact">
            <p className='title'>Contact</p>
            <ul>
                {socialMedia.map((item) => (
                <li key={item.social}>
                    <Link to={item.link}>{item.social}</Link>
                </li>
                ))}
            </ul>
        </div>

        </div>
    </div>

    <div className="copyrights">
        <p>© 2026 News up All right reserved</p>
        <p>Designed with clarity</p>
    </div>
    </footer>
    )
}