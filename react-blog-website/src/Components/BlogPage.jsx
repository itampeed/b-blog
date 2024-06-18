import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards'; // Import the BlogCards component
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Corrected variable name to camelCase
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
        
        // Add category to the URL if selected
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className='px-5 py-5'>
      <div>
        <CategorySelection 
          onSelectCategory={handleCategoryChange} 
          selectedCategory={selectedCategory} 
          activeCategory={activeCategory}
        />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <BlogCards 
          blogs={blogs} 
          currentPage={currentPage} 
          selectedCategory={selectedCategory} 
          pageSize={pageSize} // Corrected prop name to match the BlogCards component
        />
        <SideBar/>
      </div>
      <div>
        <Pagination 
          onPageChange={handlePageChange}
          blogs={blogs} 
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
