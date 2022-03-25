import './App.css';
import Header from "./components/Header/Header";
import NavbarLeft from "./components/Navbar/NavbarLeft/NavbarLeft";
import Profile from "./components/Profile/Profile";
import NavbarRight from "./components/Navbar/NavbarRight/NavbarRight";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header />
        <NavbarLeft />
        <div className='app-wrapper-content'>
        {/*<Profile />*/}
        <Dialogs />
        </div>
        <NavbarRight />
    </div>
  );
}

export default App;
