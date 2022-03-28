import s from './NavbarLeft.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? s.active : "";

const NavbarLeft = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" className={setActive}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/messages" className={setActive}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" className={setActive}>News</NavLink></div>
            <div className={s.item}><NavLink to="music" className={setActive}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" className={setActive}>Settings</NavLink></div>
        </nav>
    );
}

export default NavbarLeft;