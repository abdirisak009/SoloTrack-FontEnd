import React from 'react'

const contact = () => {
  return (
    <section className="contact bg-white px-6 py-10 my-5 w-[45%] mx-auto shadow-xl rounded-2xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Form</h2>

        <div className="input-box">
          <label className="block text-gray-700 font-semibold mb-1">Full name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
            name="name"
          />
        </div>

        <div className="input-box">
          <label className="block text-gray-700 font-semibold mb-1">Email address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div className="input-box">
          <label className="block text-gray-700 font-semibold mb-1">Your message</label>
          <textarea
            name="Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default contact