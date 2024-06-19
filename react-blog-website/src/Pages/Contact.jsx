import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Your Message has been submitted, You will be contacted shortly");
      // Add your form submission logic here

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className='py-40 bg-black text-center text-white px-4'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact</h1>
      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto  p-8 rounded-lg'>
        <div className='mb-6'>
          <label htmlFor='name' className='block text-left text-sm font-medium text-gray-300 mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md bg-gray-900 text-white`}
          />
          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block text-left text-sm font-medium text-gray-300 mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md bg-gray-900 text-white`}
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='message' className='block text-left text-sm font-medium text-gray-300 mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md bg-gray-900 text-white`}
            rows='5'
          ></textarea>
          {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
        </div>
        <button
          type='submit'
          className='w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;