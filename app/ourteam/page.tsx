export const metadata = {
    title: 'Our Team',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Banner1 from '@/components/banner1';

  
  export default function OurTeam() {
    return (
      <section className="relative">


              {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[1100px] pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>





        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">


        {/* Section header */}
          <div className="text-center pb-12 md:pb-19">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Where Individual Brilliance Converges into<br></br> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Extraordinary Teamwork !</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8"  data-aos="zoom-y-out" data-aos-delay="150">Harnessing the Power of Collaboration: Where Our Company's Success Story is Crafted Through Seamless Teamwork, Innovation, and Unity!</p>
            </div>
          </div>


          <div className="flex justify-center pb-12 md:pb-20" data-aos="zoom-y-out" data-aos-delay="300">
          <Image src="/team1.jpg" alt="My Image" width={700} height={300} />

          </div>

          <Team />

          
  
          </div>

          <Banner1 />

        </div>

      </section>
    )
  }
  