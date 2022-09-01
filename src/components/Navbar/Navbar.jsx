import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const getClassName = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}` : s.link
}

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.item}>
                <NavLink className={getClassName} to="/">Home</NavLink>
                </li>
                <li className={s.item}>
                <NavLink className={getClassName} to="movies">Movie</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;