import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navbarr">
            <span>FILMSTREAM</span>
            <ul>
                <li><Link to='/popular' className="link">POPULAR</Link></li>
                <li><Link to='/toprated' className="link">TOP RATED</Link></li>
                <li><Link to='/upcoming' className="link">UPCOMING</Link></li>
            </ul>
            <div className="right">
            <form action="" method="post">
                <input type="text" placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
            </form>
            <button className="login">LOGIN</button>
            </div>
            
        </div>
    )
}