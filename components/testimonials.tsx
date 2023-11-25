import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import FancyTestimonialsSlider from '@/components/fancy-testimonials-slider'

export default function Testimonials() {


  const testimonials = [
    {
      img: TestimonialImg01,
      quote: "I am incredibly impressed by Innovation Geeks. Their multi-talented team seamlessly blends technical expertise with creative innovation, delivering unparalleled results.",
      name: 'Nakul Parameswar',
      role: 'IIT Hyderabad'
    },
    {
      img: TestimonialImg02,
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      img: TestimonialImg03,
      quote: "I'm incredibly impressed with Innovation Geeks' outstanding work. From the initial consultation to the final launch, their team showcased unparalleled professionalism and creativity.",
      name: 'Jeeva C',
      role: 'JC Cinematography'
    }
  ]








  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by world class Startups & Institutions</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Our Proven Track Record of Excellence and Innovation sets Us Apart as the Preferred Partner for Ambitious Entrepreneurs, & Respected Educational and Research Institutions Globally</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/sece.png" width="124" height="24">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/echo3D.png" width="124" height="24">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/logo.png" width="174" height="24">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/JC.png" width="174" height="24">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/eco.png" width="124" height="14">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/smes.png" width="124" height="14">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/mayukai.png" width="124" height="14">
                
              </img>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full fill-current text-gray-400" src="/vector.png" width="124" height="14">
                
              </img>
            </div>

           

          </div>

      




          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24" data-aos="zoom-y-out">

            <div className="flex justify-center">
  
              <FancyTestimonialsSlider testimonials={testimonials} />
  
            </div>
          </div>


          

        </div>
      </div>
    </section>
  )
}