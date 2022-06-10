import './styles.css'
import 'bootstrap/js/src/collapse.js'
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
          <div className="container-fluid">
              <a href="link" className="nav-logo-text">
            
              </a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#luizapets-navbar" aria-controls="luizapets-navbar" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="luizapets-navbar">
                  <ul className="navbar-nav offset-md-2 main-menu">
                      <li>
                          <a href="link" className="active">HOME</a>
                      </li>
                      <li>
                          <a href="link">DOWNLOAD</a>
                      </li>
                      <li>
                          <a href="link">CATÁLOGO</a>
                      </li>
                      <li>
                          <a href="link">AJUDA</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
  
  export default Navbar;