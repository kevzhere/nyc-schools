import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navBar.css'
import { Link } from 'react-router-dom'
import { faSchoolLock } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <FontAwesomeIcon icon={faSchoolLock}/>
        </div>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/schools'}>Schools</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar