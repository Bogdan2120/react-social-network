import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLeft}>
                <div className={s.logo}>
                    <img src='https://flyclipart.com/thumb2/png-logo-design-transparent-logo-design-images-489321.png'/>
                    <input type="text"/>
                </div>
            </div>
        </header>
    );

}
export default Header;