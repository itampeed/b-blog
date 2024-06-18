import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaTimes } from 'react-icons/fa';
import Modal from './Modal';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { path: '/', text: 'Home' },
        { path: '/blog', text: 'Blog' },
        { path: '/about', text: 'About' },
        { path: '/services', text: 'Services' },
        { path: '/contact', text: 'Contact' },
    ]

    const location = useLocation();

    useEffect(() => {
        
    }, [location.pathname])

    const openModal = () => {
        setIsModelOpen(true)
    }

    const closeModal = () => {
        setIsModelOpen(false)
    }

    return (
        <header className='bg-black text-white  fixed top-0 left-0 right-0'>
            <nav className='p-4 flex justify-between items-center mx-auto'>
                <Link to='/' className='text-xl font-bold text-white'>i<span className='text-orange-500'>tampeed</span></Link>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map((e) => (
                        <li key={e.path}><Link to={e.path} className={`pb-2 ${location.pathname === e.path ? 'text-orange-500 border-b-2 border-b-orange-500' : ''}`} key={e.path}>{e.text}</Link></li>
                    ))}
                </ul>

                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <Link to='/'>
                        <FaFacebook className='text-white hover:text-orange-500' />
                    </Link>
                    <Link to='/'>
                        <FaInstagram className='text-white hover:text-orange-500' />
                    </Link>
                    <Link to='/'>
                        <FaTwitter className='text-white hover:text-orange-500' />
                    </Link>
                    <button onClick={openModal} className='bg-orange-500 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

                <Modal isOpen={isModelOpen} onClose = {closeModal}/>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='corsor-pointer'>
                        {
                            isMenuOpen ? <FaTimes className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>
                </div>
            </nav>
            <div>
                <ul className={`md:hidden gap-12 text-lg block spacing-y-4 px-4 py-6 mt-16 bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
                    {navItems.map((e) => (
                        <li className='text-black' onClick={toggleMenu} key={e.path}>
                            <Link to={e.path}>{e.text}</Link>
                        </li>
                    ))}
                    <div className='text-black lg:flex gap-4 items-center flex'>
                        <Link to='/'>
                            <FaFacebook className='hover:text-orange-500' />
                        </Link>
                        <Link to='/'>
                            <FaInstagram className='hover:text-orange-500' />
                        </Link>
                        <Link to='/'>
                            <FaTwitter className='hover:text-orange-500' />
                        </Link>
                        <button className='bg-orange-500 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
