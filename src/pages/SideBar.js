import '../App.css';
import { Link } from "react-router-dom";
const SideBar = () => {
  return (

      <nav>
        <ul>
          <li>
            <Link to="/" className='home'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='header'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='sidebar'>Contact</Link>
          </li>
        </ul>
      </nav>
      );
  
};

export default SideBar;