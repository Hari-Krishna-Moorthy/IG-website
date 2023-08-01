import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import TestimonialImage1 from '@/public/images/testimonial1.jpg'
import Hari from '@/public/images/hari.jpeg'
import Hari1 from '@/public/images/hari1.jpeg'
import Gaj from '@/public/images/gajendar.jpg'
import Gaj1 from '@/public/images/gajendar1.jpg'
import Sab from '@/public/images/sabaree.jpg'
import Sab1 from '@/public/images/sabaree1.jpg'
import Vish from '@/public/images/vishnu.jpg'
import Vish1 from '@/public/images/vishnu1.jpg'
import Sam from '@/public/images/sampathsir.jpg'
import Sam1 from '@/public/images/sampathsir1.jpg'
import Mam from '@/public/images/summiamam.jpg'
import Mam1 from '@/public/images/summiamam1.jpg'
import Viv from '@/public/images/viveksir.png'
import Viv1 from '@/public/images/viveksir1.png'
import Adi from '@/public/images/adhi.jpg'
import Adi1 from '@/public/images/adhi1.jpg'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import FancyTestimonialsSlider from '@/components/fancy-testimonials-slider'

export default function Team(){

    return(
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
               <div className="py-12 md:py-20">

               <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 " data-aos="zoom-y-out">Our Team</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" >Meet Our Stellar Team: Trailblazers in Tech, Innovators at Heart.</p>
          </div>



          <div className="max-w-sm md:max-w-7xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">

{/* Teammate */}
<div className=" max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-7 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full opacity-1 transition-opacity hover:opacity-0" src={Hari1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full opacity-1 transition-opacity hover:opacity-0" src={Hari} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Hari Krishnamoorthy T</cite>
      <div className="text-gray-600">
        <span>Founder & CEO</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div> 


{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out" data-aos-delay="150">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Gaj1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Gaj} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Gajendar Singh J</cite>
      <div className="text-gray-600">
        <span>Co-Founder & Marketing Director</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>

{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out" data-aos-delay="300">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Sab1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Sab} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Sabareesan A</cite>
      <div className="text-gray-600">
        <span>Co-Founder & ML Engineer</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>


{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out" data-aos-delay="450">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={TestimonialImage1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={TestimonialImage} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Vishal D</cite>
      <div className="text-gray-600">
        <span>Co-Founder & Full-stack Developer</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>



{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-8 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Sam1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Sam} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Sampath Kumar S</cite>
      <div className="text-gray-600">
        <span>Chief Technical Director</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>


{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out"data-aos-delay="150">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-11 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Mam1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Mam} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Summia Parveen H</cite>
      <div className="text-gray-600">
        <span>Head of Product</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>


{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out" data-aos-delay="300">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-8 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Viv1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Viv} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Vivek Kumar</cite>
      <div className="text-gray-600">
        <span>Chief Outreach Director</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>


{/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:col-auto" data-aos="zoom-y-out" data-aos-delay="450">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Vish1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Vish} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Kalanjiya Vishnu J</cite>
      <div className="text-gray-600">
        <span>Full-stack Developer</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>


</div>

<div className="max-w-sm md:max-w-7xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-1">

  {/* Teammate */}
<div className="max-w-3xl mx-auto mt-20 md:py-6" data-aos="zoom-y-out">
  <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
    
    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2">
        <Image className="relative rounded-full" src={Adi1} width={136} height={96} alt="Testimonial 01" />
      </div>
      <div className="absolute top-0 -mt-16 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity hover:opacity-0">
        <Image className="relative rounded-full" src={Adi} width={136} height={96} alt="Testimonial 01" />
      </div>
      <cite className="block font-bold text-lg not-italic mb-1">Adhithya J</cite>
      <div className="text-gray-600">
        <span>User Experience Designer</span> 
        <br></br>
        <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>
      </div>
    </div>
  </div>
</div>

</div>












               </div>
            </div>
            
            

        </section>
    )
}