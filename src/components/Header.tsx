import heroIcon from  '../assets/hero.png'
import ThemeSwitcher from "./ThemeSwitcher.tsx";
const Header = () => {

    return (
        <header className='flex items-center justify-between py-4 shadow shadow-gray-200 bg-baseOne transition-colors duration-300 lg:px-[160px] sm:px-[40px] px-[16px]'>
            <div>
                <img className="w-[40px] h-[40px]" src={heroIcon} alt="icon" />
            </div>
            <nav className="sm:block hidden">
                <ul className='flex items-center space-x-5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div>
                <button><strong>Select Theme</strong></button>
            </div>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;