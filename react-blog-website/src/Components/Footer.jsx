import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [FormData, setFormData] = useState({email: ''})
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(FormData.email === ''){
            setError('Please write an email here')
        }
        else{
            setError('')
            alert('Email Submitted Successfully, You will be contacted shortly...')
            setFormData({
                email : ''
            })
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name] : value
        })
    }



    return (
        <div className='bg-gray-900 p-10'>
            <h4 className='text-gray-400 mb-5'>Subscribe for Updates <p className='text-red-500 text-sm inline'>{error}</p></h4>
            <form className="flex flex-col sm:flex-row justify-center w-full" onSubmit={handleSubmit}>
                <input type="email" className="flex-grow p-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border-none" placeholder="Enter your email" name='email' value={FormData.email} onChange={handleChange}/>
                <button type="submit" className="p-2 bg-orange-600 text-white rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-white w-full font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in sm:w-auto">Subscribe</button>
            </form>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid pb-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-evenly'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 border-b-[1px] border-gray-700 pb-4'>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Category</p>
                            <ul>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                            <ul>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>ecommerce</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Cheery</p>
                            <ul>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non Profit</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Business</p>
                            <ul>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Inforenure</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forums</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className='w-full text-center'>
                        <p className='text-gray-500'>Copyright @ 2024 | Made by <Link to='https://itampeednew.surge.sh/' className='font-bold hover:text-orange-500' target='_blank'>Bilal</Link> in React</p>
                    </div>
            </div>

        </div>
    )
}

export default Footer
