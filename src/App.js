import './App.css';
import Header from "./components/Header/Header";
import NavbarLeft from "./components/Navbar/NavbarLeft/NavbarLeft";
import Profile from "./components/Profile/Profile";
import NavbarRight from "./components/Navbar/NavbarRight/NavbarRight";


const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <NavbarLeft />
        <Profile />
        <NavbarRight />
    </div>
  );
}

export default App;
