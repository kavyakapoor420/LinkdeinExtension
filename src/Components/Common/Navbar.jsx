const Navbar = () => {
    return (
      <nav className="w-[1000px] mx-auto py-2 px-6 sticky top-2 z-10">
        <div 
          className="max-w-7xl mx-auto rounded-full border border-[#402E7F] p-2 
          bg-gradient-to-t from-sky-500 to-indigo-500 shadow-lg backdrop-blur-lg"
          style={{
            boxShadow: '0px 10px 26.2px 15px rgba(102, 61, 158, 0.21)',
             backdropFilter: 'blur(20px)'
          }}>
          
          <div className="flex items-center justify-between">
            {/* brand logo */}
            <div className="text-white text-2xl mx-8 font-bold">
              SafetiPin
            </div>
            {/* Menu elements of Navbar  */}
            <div className="flex items-center justify-center space-x-8">
                <a href="#" className="text-white hover:text-green-400 transition-colors">
                    HOME 
                </a>
                <a href="#" className="text-white hover:text-green-400 transition-colors">
                    Working
                </a>
                <a href="#" className="text-white hover:text-green-400 transition-colors">
                    All Features
                </a>
            </div>
              {/* user SignIn  */}
              <button >
                <a href="#" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-green-400 transition-colors">
                    SignIn
                </a>
              </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  