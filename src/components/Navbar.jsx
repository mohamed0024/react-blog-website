import './Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/icons/search.png'
import saved from '../assets/icons/saved.png'
import {Link} from 'react-router-dom'
const links =[
    {name:'Home',path:'/'},{name:'Trending',path:'/#trending'},{name:'All News',path:'/posts'}
]
export default function Navbar() { return (
    <nav>
        <img className="logo"src={logo} alt="logo" />
        <div className="links">
            {links.map((item) =>(
                <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
                </Link>
            ))}
        </div>
        <div className='container'>
        <div className='searchField'>
            <img className='search-icon' src={search} alt="search-icon" />
            <input type="text" placeholder="Search on News up"className="search-bar"/>
        </div>
        <div className="saved">
            <img src={saved} alt="saved-icon" />
        </div>
        </div>
        
    </nav>
) }
