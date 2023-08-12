export const metadata = {
    title: 'Blog1',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Newsletter1 from '@/components/newsletter1';
  import FeaturesBlocks from '@/components/features-blocks'
  import vish from '@/public/images/testimonial1.jpg'


  
  export default function Blog1() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-20 md:pb-20">




<div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mb-4 lg:mb-6 not-format">
              <div className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <Image className="mr-4 w-16 h-16 rounded-full" src={vish} alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900">Vishal D</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Co-Founder Innovation Geeks</p>
                    
                      </div>
                  </div>
              </div>
              <h1 className="mb-4 text-4xl font-extrabold leading-tighter tracking-tighter mt-2 mb-2 leading-tight">Best practices for successful prototypes</h1>
          </div>
          <p className="text-gray-900 mb-4">Flowbite is an open-source library of UI components built with the utility-first
              classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
              datepickers.</p>
          <p className="text-gray-900 mb-4">Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
              you can think things through before committing to an actual design project.</p>
          <p className="text-gray-900 mb-4">But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
                  Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
              bars, cards, form elements, and more which are conveniently built with the utility classNamees from
              Tailwind CSS.</p>
          <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" className="mb-4" alt=""/>
              <div className="text-gray-900 mb-4  flex items-center justify-center">Digital art by Anonymous</div>
          
          <h2 className="text-gray-900 mb-4 font-bold">Getting started with Flowbite</h2>
          <p className="text-gray-900 mb-4">First of all you need to understand how Flowbite works. This library is not another framework.
              Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
              documentation.</p>
          <p className="text-gray-900 mb-4">It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
              and datepickers which you can optionally include into your project via CDN or NPM.</p>
          <p className="text-gray-900 mb-4">You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                  guide</a> to explore the elements by including the CDN files into your project. But if you want
              to build a project with Flowbite I recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.</p>
          <p className="text-gray-900 mb-4">You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
              you get started with your projects even faster. You can check out this <a
                  href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
              the differences between the open-source and pro version of Flowbite.</p>
          <h2 className="text-gray-900 mb-4 font-bold">When does design come in handy?</h2>
          <p className="text-gray-900 mb-4">While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>
          <ol className="mb-4">
              <li className="text-gray-900 mb-4"><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                  follow your intended user journey and buy something from the site you’ve designed? By running a
                  usability test, you’ll be able to see how users will interact with your design once it’s live;
              </li>
              <li className="text-gray-900 mb-4"><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                  properly? Pass your prototype to your data protection team and they can test it for real;</li>
              <li className="text-gray-900 mb-4"><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                  providing your client with a hands-on experience;</li>
              <li className="text-gray-900 mb-4"><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                  design elements, designers and developers can understand each other — and the project — better.
              </li>
          </ol>
          
         
          

      </div>
  </div>
</div>
</div>
</div>








          

          
        
        

      </section>
    )
  }
  