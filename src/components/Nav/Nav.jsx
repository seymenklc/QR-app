import { Link } from 'react-router-dom';
// Styles
import './Nav.css';

export default function Nav() {
    return (
        <div className="nav-container">
            <nav className='navbar'>
                <Link className='nav-link' to='/'>
                    <h1>QR Wizard!</h1>
                </Link>
                <ul>
                    <li><Link className='nav-link' to='/create'>Create</Link></li>
                    <li><Link className='nav-link' to='/scan'>Scan</Link></li>
                    <li><Link className='nav-link' to='/saved'>Saved</Link></li>
                </ul>
            </nav>
        </div>
    );
}
