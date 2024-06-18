import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About</h1>
      </div>
      <div className='flex flex-wrap w-full h-full'>
        <div className="bg-white p-10 md:p-20 lg:p-50 md:flex items-center justify-center">
          <div className="md:w-1/2 mr-0 md:mr-20 lg:mr-0 relative">
            <img className="w-full md:h-800 object-cover" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg" alt="main image" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="px-0 md:px-10">
              <p className="text-4xl font-bold mb-10">About Us</p>
              <p className="text-lg mb-10">
                We are a Bloggin and News Sharing Platform from Pakistan, Operating from the Region of Punjab and delivering you the best and most valued piece of information from  different cities, books and areas. We value the content you want to read and so we deliver it to you...
              </p>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
                    <img className="w-8 h-8" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" alt="value icon" />
                    <div className="ml-4">
                      <p className="text-lg font-bold mb-2">Value</p>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
                    <img className="w-8 h-8" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" alt="value icon" />
                    <div className="ml-4">
                      <p className="text-lg font-bold mb-2">Value</p>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
                    <img className="w-8 h-8" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" alt="value icon" />
                    <div className="ml-4">
                      <p className="text-lg font-bold mb-2">Value</p>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
                    <img className="w-8 h-8" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" alt="value icon" />
                    <div className="ml-4">
                      <p className="text-lg font-bold mb-2">Value</p>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to='/blog' className="block w-full mt-8">
                <button className="bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-md hover:bg-red-600">Read our BLogs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
