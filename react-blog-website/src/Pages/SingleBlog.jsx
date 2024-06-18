import React, { useEffect, useState } from 'react'
import { FaClock, FaUser } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import SideBar from '../Components/SideBar'

const SingleBlog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      let res = await fetch(`http://localhost:5000/blogs/${id}`);
      const data = await res.json();
      setBlog(data)
    }
    fetchBlog();
  }, [id])

  if (!blog) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Content</h1>
      </div>

      <div className='flex'>
        <div className='lg:w-2/3 my-12 mx-10'>
          <div className='w-full'>
            <img src={blog[0].image} alt={blog.title} className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-6'>{blog[0].title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{blog[0].author} | {blog[0].published_date}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{blog[0].reading_time}</p>
          <p className='text-base text-gray-600 mb-6'>{blog[0].content}</p>
          <div className='text-base text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel. Nobis sint nostrum repellat hic expedita, at officiis, facilis laborum, enim inventore explicabo aliquid corporis deleniti? Cupiditate dolorum quae quasi veniam dicta placeat ex necessitatibus.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos asperiores nam, sit numquam suscipit? Fugit animi facere quod voluptatum impedit optio. Culpa ducimus error obcaecati cumque, odio accusantium eligendi placeat. Est dolor, quidem cumque neque minima provident quisquam, eum porro praesentium magni alias delectus et rerum? Non, quo blanditiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel. Nobis sint nostrum repellat hic expedita, at officiis, facilis laborum, enim inventore explicabo aliquid corporis deleniti? Cupiditate dolorum quae quasi veniam dicta placeat ex necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt ut architecto enim, ex facilis nobis reprehenderit neque necessitatibus quaerat rerum velit saepe quas veniam vel odit. Ab, natus soluta? Voluptas consequatur reprehenderit soluta, odit velit amet dolorum deserunt ducimus ratione nam distinctio dignissimos nihil officiis placeat illum itaque fuga accusamus quod natus corrupti aperiam quisquam adipisci repudiandae. Accusantium consequatur sed, aut necessitatibus temporibus cumque asperiores, blanditiis, doloremque impedit id beatae similique nesciunt et aliquam distinctio excepturi ipsam consequuntur voluptas tempora. Ea error ducimus neque sed beatae eveniet quos eaque, perferendis libero aperiam eum architecto maiores, officia modi vel tempore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel. Nobis sint nostrum repellat hic expedita, at officiis, facilis laborum, enim inventore explicabo aliquid corporis deleniti? Cupiditate dolorum quae quasi veniam dicta placeat ex necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel. Nobis sint nostrum repellat hic expedita, at officiis, facilis laborum, enim inventore explicabo aliquid corporis deleniti? Cupiditate dolorum quae quasi veniam dicta placeat ex necessitatibus.</p><br />
          </div>
        </div>
        <div className='lg:w-1/3 mt-10'>
          <SideBar/>  
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
