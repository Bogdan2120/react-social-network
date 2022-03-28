import './App.css';
import Header from "./components/Header/Header";
import NavbarLeft from "./components/Navbar/NavbarLeft/NavbarLeft";
import Profile from "./components/Profile/Profile";
import NavbarRight from "./components/Navbar/NavbarRight/NavbarRight";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings"

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarLeft/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="messages" element={<Dialogs />}/>
                    <Route path="news" element={<News />}/>
                    <Route path="music" element={<Music />}/>
                    <Route path="settings" element={<Settings />}/>
                </Routes>
            </div>
            <NavbarRight/>
        </div>

    );
}

export default App;
