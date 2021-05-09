import { Link } from 'react-router-dom'

const Links = () =>{
    return (
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link className="nav-link active"
                        aria-current="page"
                        to="/service">Service
                    </Link>  
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link"
                        to="/contact"
                        >
                        Contact
                    </Link>
                </li>
            </ul>
    )
}

export default Links