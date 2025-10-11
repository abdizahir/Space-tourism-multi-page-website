import logo from '../../public/images/shared/logo.svg';
import hamburger from '../../public/images/shared/icon-hamburger.svg';
import close from '../../public/images/shared/icon-close.svg';
import Modal from '../UI/Modal';

import { useState } from 'react';
import { NavLink } from 'react-router';
function Header() {
    const [isOverLay, setIsOverLay] = useState(false);

    function handleStartOverlay() {
        setIsOverLay(true);
    }

    function handleStopOverlay() {
        setIsOverLay(false)
    }

    let mobileBar = <span className="absolute -right-4  top-0 h-[19px] w-[4px]  bg-white"></span>;
    let deskBar = <span className="absolute left-0 -bottom-6 h-[2px] w-full bg-white"></span>;

    return(
        <section className='relative'>
        <nav className='w-full h-22 p-6 sm:pl-8 sm:pr-0 sm:py-0 md:pt-2 flex items-center sm:gap-8 justify-between'>
            <NavLink to="/">
                <img src={logo} alt="logo-image" className='w-10 h-10' />
            </NavLink>
            <button onClick={handleStartOverlay} className='cursor-pointer sm:hidden'>
                <img src={hamburger} alt="menu-image" />
            </button>   
            <hr className='text-white w-4/12 opacity-40 hidden only-md absolute left-40 z-10' />
            <ul className='hidden sm:flex gap-8 justify-end navbar p-6 rounded-md sm:w-11/12 md:w-[763px]'>
                <li>
                    <NavLink to='/' className="relative">
                    {({isActive}) => (
                        <div className='flex gap-2 bg'>
                            <div className='flex gap-1'>
                                <span className='text-white font-bold'>0</span>
                                <span className='text-white font-bold'>0</span>
                            </div>
                            <span className='md:relative text-blue-300'>
                                HOME
                            </span>
                            {isActive && (deskBar)}
                        </div>
                    )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/destinations'>
                    {({isActive}) => (
                            <div className='flex gap-2 relative'>
                                <div className='flex gap-1'>
                                    <span className='text-white font-bold'>0</span>
                                    <span className='text-white font-bold'>1</span>
                                </div>
                                <span className='text-blue-300'>DESTINATION</span>
                                {isActive && (deskBar)}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/crew'>
                        {({isActive}) => (
                            <div className='flex gap-3 items-center relative'>
                                <div className='flex gap-1'>
                                    <span className='text-white font-bold'>0</span>
                                    <span className='text-white font-bold'>2</span>
                                </div>
                                <span className='text-blue-300'>CREW</span>
                                {isActive && (deskBar)}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/technology'>
                        {({isActive}) => (
                            <div className='flex gap-3 items-center relative'>
                                <div className='flex gap-1'>
                                    <span className='text-white font-bold'>0</span>
                                    <span className='text-white font-bold'>3</span>
                                </div>
                                <span className='text-blue-300'>TECHNOLOGY</span>
                                {isActive && (deskBar)}
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
        {isOverLay && (<Modal>
            <section className='flex flex-col gap-12 max-h-[1000px] h-auto'>
                <button className='flex justify-end cursor-pointer ' onClick={handleStopOverlay}>
                    <img src={close} alt="close-btn" className='my-4' />
                </button>
                <ul className='flex flex-col gap-8 mt-12'>
                    <li>
                        <NavLink to='/'>
                        {({isActive}) => (
                            <div className='flex gap-2 relative'>
                                <div className='flex gap-1'>
                                    <span className='text-white font-bold'>0</span>
                                    <span className='text-white font-bold'>0</span>
                                </div>
                                <span className='text-blue-300'>Home</span>
                                {isActive && (mobileBar)}
                            </div>
                        )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/destinations'>
                        {({isActive}) => (
                                <div className='flex gap-2 relative'>
                                    <div className='flex gap-1'>
                                        <span className='text-white font-bold'>0</span>
                                        <span className='text-white font-bold'>1</span>
                                    </div>
                                    <span className='text-blue-300'>DESTINATION</span>
                                    {isActive && (mobileBar)}
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew'>
                            {({isActive}) => (
                                <div className='flex gap-3 items-center relative'>
                                    <div className='flex gap-1'>
                                        <span className='text-white font-bold'>0</span>
                                        <span className='text-white font-bold'>2</span>
                                    </div>
                                    <span className='text-blue-300'>CREW</span>
                                    {isActive && (mobileBar)}
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/technology'>
                            {({isActive}) => (
                                <div className='flex gap-3 items-center relative'>
                                    <div className='flex gap-1'>
                                        <span className='text-white font-bold'>0</span>
                                        <span className='text-white font-bold'>3</span>
                                    </div>
                                    <span className='text-blue-300'>TECHNOLOGY</span>
                                    {isActive && (mobileBar)}
                                </div>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </section>
        </Modal>)}
        </section>
    );
}

export default Header;