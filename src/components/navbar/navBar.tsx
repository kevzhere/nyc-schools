import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navBar.css'
const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          {/* <FontAwesomeIcon icon={regular('coffee')}/> */}
        </div>
        <ul>
          <li>
            Home
          </li>
          <li>
            Schools
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar