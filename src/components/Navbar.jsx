import logo from '../assets/logo.png'
import search from '../assets/icons/search.png'
import saved from '../assets/icons/saved.png'
import {Link} from 'react-router-dom'
const links =[
    {name:'Home',path:'/'},{name:'Trending',path:'/#trending'},{name:'Posts',path:'/posts'}
]
export default function Navbar() { return (
    <nav>
        <img src={logo} alt="logo" />
        {links.map((item) =>(
            <Link key={item.name} to={item.path}>
            {item.name}
            </Link>
        ))}
        <div className='searchField'>
            <img className='search-icon' src={search} alt="search-icon" />
            <input type="text" placeholder="Search on News up"className="search-bar"/>
        </div>
        <div className="saved">
            <img src={saved} alt="saved-icon" />
        </div>
        
    </nav>
) }
