import Navbar from "./Components/Common/Navbar"
import Dashboard2 from "./Components/Dashboard/Dash"
import Dashboard from "./Components/Dashboard/LeftSection/Card"
import { AllFeaturesSection } from "./Components/Home/AllFeaturesSection"
import HeroSection from "./Components/Home/HeroSection"

function App() {
  

  return (
    <div className="bg-gradient-to-b from-black to-indigo-900">
      <Navbar/>
      <Dashboard2/>
       <Dashboard/>
      <AllFeaturesSection/>
      <HeroSection/>
    </div>
  )
}

export default App
