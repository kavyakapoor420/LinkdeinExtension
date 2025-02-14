import Register from "./Auth/Register"
import Chatbot from "./Chatbot/ChatBot"
import FeatureSection from "./Components/Common/FeatureCards"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"
import Dashboard2 from "./Components/Dashboard/Dash"
import Dashboard from "./Components/Dashboard/LeftSection/Card"
import { AllFeaturesSection } from "./Components/Home/AllFeaturesSection"
import HeroSection from "./Components/Home/HeroSection"

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 . h-full w-full ">
      <Navbar/>
      <AllFeaturesSection/>
      <HeroSection/> 
      <FeatureSection/>
      <Chatbot/>
      <Dashboard2/>
       <Dashboard/>  
      <Register/>
      <Footer/>        
    </div>
  )
}

export default App
