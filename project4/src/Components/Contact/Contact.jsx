import React from 'react'

function Contact() {
  return (
    <div className=' dark:bg-black dark:text-white'>
      <h1 className=" font-serif font-bold text-center text-4xl py-6">Contact Me</h1>
        <p className=" text-center pb-8 font-sans font-medium">Please fill out the form below to discuss any Work opportunities.</p>
        <form className='flex flex-col items-center justify-center gap-y-8'>

          <input type="text" className='bg-gray-300 border-none w-2/5 px-5 py-3 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg focus-visible:outline-none' placeholder='Your Name' />

          <input type="email" className='bg-gray-300 border-none w-2/5 px-5 py-3 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg focus-visible:outline-none' placeholder='Your E-mail' />

          <textarea name="message"  rows="5" className='bg-gray-300 border-none w-2/5 px-5 py-3 resize-none focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg focus-visible:outline-none' placeholder='Your Message'></textarea>

          <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mb-5" type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default Contact
