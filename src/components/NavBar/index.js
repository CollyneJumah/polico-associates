import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow nav">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/173823938_300281701603090_7294814734384138303_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE15uS0wPC8DZQtHrxm7eLWKFOXuFAaSfIoU5e4UBpJ8vaWjS5ChaYMzC7_y8Pk2SmGsMzpqTcZXaFRnZuueZ0V&_nc_ohc=rzcFWqpzxYEAX-k6l1m&_nc_ht=scontent.fmba5-1.fna&oh=c70b5c8312262d3317182002185200f3&oe=60B759CD"
                     width="70"
                     height="auto"
                     className="img-responsive img-fluid img-rounded"
                     style={{
                         borderRadius:"20px"
                     }}
                     alt=""/>
                     Polico
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
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
                </div>
            </div>
        </nav>
    )
}

export default NavBar