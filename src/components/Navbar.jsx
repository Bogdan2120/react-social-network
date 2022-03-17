import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="#s"></a>Profile</div>
            <div><a href="#s"></a>Messages</div>
            <div><a href="#s"></a>News</div>
            <div><a href="#s"></a>Music</div>
            <div><a href="#s"></a>Settings</div>
        </nav>
    );
}

export default Navbar;