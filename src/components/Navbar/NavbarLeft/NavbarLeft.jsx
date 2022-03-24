import s from './NavbarLeft.module.css'

const NavbarLeft = () => {
    return (
        <nav className={s.navLeft}>
            <div><a href="#s"></a>Profile</div>
            <div><a href="#s"></a>Messages</div>
            <div><a href="#s"></a>News</div>
            <div><a href="#s"></a>Music</div>
            <div><a href="#s"></a>Settings</div>
        </nav>
    );
}

export default NavbarLeft;