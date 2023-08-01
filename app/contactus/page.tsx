export const metadata = {
    title: 'Contact Us',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function ContactUs() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
          <div className="flex flex-col sm:flex-row pt-32 pb-12 md:pt-40 md:pb-0">
            
  
            {/* Page header */}
            <div className="w-1/2 h-screen max-w-3xl mx-auto   pb-12 md:pb-20">
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Get in Touch!</h1>
              <h4 className="h4 text-gray-400">Drop your mail at</h4>
              <h1 className="h3">info@innovationgeeks.in</h1>
              
            </div>
            
  
            {/* Form */}
            <div className="w-1/2 h-screen max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                    <input id="name" type="text"  className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="long-text">Message <span className="text-red-600">*</span></label>
                    <textarea id="long-text" name="long-text"  className="form-input w-full resize-none text-gray-800" placeholder="Type your Message" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Send</button>
                  </div>
                </div>
              </form>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  