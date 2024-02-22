import '../Components/Navbar.css'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search-icon.svg'
const Navbar = ({setCategory,setCountry}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="NewsHive Logo" className=" logo-image d-inline-block align-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <div class="dropdown">
            <button class="btn drop-down-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Country
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" onClick={()=>setCountry("in")}>India</a></li>
              <li><a class="dropdown-item" onClick={()=>setCountry("jp")}>Japan</a></li>
              <li><a class="dropdown-item" onClick={()=>setCountry("kr")}>South Korea</a></li>
              <li><a class="dropdown-item" onClick={()=>setCountry("us")}>Unites States</a></li>
            </ul>
            </div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("general")}>General</div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("entertainment")}>Entertainment</div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("science")}>Science</div>
            </li>
            <li className="nav-item">
            <div className="nav-link active" onClick={()=>setCategory("sports")}>Sports</div>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2 green-border" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn search-icon-btn btn-outline-success" type="submit">
            <img src={searchIcon} alt="search" className="search-image d-inline-block align-top" />
            </button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
