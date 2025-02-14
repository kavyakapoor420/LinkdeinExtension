
//import imgaes from assets folder
import Single from '../../assets/Single.png'
import Double from '../../assets/Double.png'
import Triple from '../../assets/Triple.png'
import Four from '../../assets/Four.png'
import Five from '../../assets/Five.png'

export const AllFeaturesSection = () => {
  return (
    <div className="w-full bg-[#1a1b23] py-[10rem] "
    style={{
        boxShadow:'0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
        backdropFilter: 'blur(20px)'
    }}>
        <div className="max-w-[700px] mx-auto text-center mb-30">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Advanced <span className="text-purple-600">Functionality</span>
             Flawless{" "}
             <span className="text-purple-700">integration.</span>
           </h1>
           <p className="text-slate-300 text-lg md:text-xl">
           Offering exceptional power paired with seamless compatibility for your workflow—delivering results without compromise.
           </p>
        </div>
       
       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
           {/* first feature  */}
          <div className="w-full bg-[#24252d] border border-purple-500  shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
           <img 
             className="w-20 h-20 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3  "
             src={Single}
           />
           <h2 className='text-2xl font-bold text-white text-center py-6'>
              Filter Harrsemnet related Messages
           </h2>
           <div className="text-center font-medium text-slate-300">
              <p className='py-3 mx-8 border-b border-red-400 mt-8'>
                   Hides Harassing Messages while keeping evidence safe 
              </p>
              <p className='py-3 mx-8 border-b border-red-400'>
                Keeps yo stress-free by filtering harmful content
              </p>
           </div>
           <button className='bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl'>
              Want to Know  More ? 
           </button>
          </div>

          {/* second feature  */}
          <div className="w-full bg-graident-to-b from-purple-600/10 to-transparent backdrop-blur-sm border border-purple-500/20 shadow-lg flex flex-col rounded-xl my-8 md:my-0 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
          <div className="absolute top-4 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
            <div className="absolute top-6 right-6 bg-green-400 text-black text-xs px-3 py-1 rounded-full">
            Popular
            </div>
            <img 
              className='w-20 h-20 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3'
              src={Double}
            />
            <h2 className='text-2xl font-bold text-white text-center py-6'>
                Evidence Generation
            </h2>
            <div className="text-center font-medium text-gray-300">
            <p className="py-3 mx-8 border-b border-gray-700/50 mt-8">Automatically generates reports for authorities.</p>
            <p className="py-3 mx-8 border-b border-gray-700/50">Ensures legal-grade documentation of incidents.</p>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
            Want to know more ?
          </button>
          </div>

          {/* third feature  */}
           <div className="w-full bg-[#24252d] border border-purple-900  shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-purple-400 p-3"></div>
             <img
              className='w-16 h-16 mx-auto mt-2 rounded-full l bg-gradient-to-r from-purple-600 to-purple-400 p-3"'
              src={Triple}
             />
                <h2 className='text-2xl font-bold text-white text-center py-6'>
                Tagging Harassers
                </h2>
                <div className="text-center font-medium text-gray-400">
                  <p className='py-3 mx-8  border-b border-red-400 mt-8'>
                  Identifies and flags harassers for future reference.
                  </p>
                  <p className="py-3 mx-8  border-b border-red-400">
                    Maintains a detailed record of harassment instances.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
                   </button>
                </div>
             </div>

             {/* fourth feature  */}
             <div className="w-full bg-[#24252d] border border-purple-900 shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden  ">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
              <img
               className='w-16 h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3'
               src={Four}
              />
              <h2 className='text-2xl font-bold text-white text-center py-6'>
                CyberCrime Helpline
              </h2>
              <div className="text-center font-medium text-gray-400">
                <p className='py-3 mx-8 border-b border-gray-700 mt-8'>
                    Direct Integrations with cyberCrime Helpline Services
                </p>
                <p className='py-3 mx-8 border-b border-gray-700'>
                    Provides prompt support for victims of line abuse
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
                </button>
              </div>
             </div>
             {/* fifth feature  */}
             <div className="w-full bg-[#24252d] border border-purple-900 shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
            <img
              className="w-16 h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3"
              src={Five}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-white text-center py-6">
              Easy Reporting
            </h2>
            <div className="text-center font-medium text-gray-400">
              <p className="py-3 mx-8 border-b border-gray-700 mt-8">
                Simplifies the process of reporting harassment cases.
              </p>
              <p className="py-3 mx-8 border-b border-gray-700">
                Ensures clear and concise documentation for action.
              </p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
            </button>
          </div>
       </div>

    </div>
  )
}
