import Spline from '@splinetool/react-spline'
import TypeWritingEffect from './TypeWritingEffect'


const HeroSection = () => {
  return (
    <div>
        <div className="relative w-full h-screen overflow-hidden z-0 ">
           <div className="absolute inset-0 flex flex-col mt-[-100px] justify-center items-center z-5 text-center pointer-events-none">
                 
                 {/* Main title  */}
                 <h1 className="md:text-7xl sd:text-2xl font-URW text-xl font-bold text-transparent bg-gradient-to-r  from-purple-600 via-white to-purple-600 bg-clip-text ">
                    Stay Safe Online, Hassle-Free
                    <br/>
                 </h1>
                 {/* small para to display main feature of website  */}
              <div className="flex justify-center items-center">
                 <p className='md:text-2xl sd:text-2xl text-xl text-transparent bg-gradient-to-r from-purple-600 via-white to-purple-600 bg-clip-text'>
                 Hide harassment messages while securing evidence for legal actions. <br />
                 Stay
                 <TypeWritingEffect/>
                 </p>
              </div>
              {/* button-> link to chrome extension */}
              <button className='bg-red-500 mx-auto w-[200px] py-3 my-6 mb-30 rounded-3xl text-white font-bold pointer-events-auto'>
                 <a href='#'>
                    Install Extension Now!
                 </a>
              </button>
           </div>
           <div className="absolute top-[40%] left-0 right-0 z-0">
                    <Spline scene="https://prod.spline.design/Ql1hHdBoyb7KLnb6/scene.splinecode" />
              </div>
        </div>
    </div>
  )
}

export default HeroSection