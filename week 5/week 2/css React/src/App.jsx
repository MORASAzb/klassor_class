import './App.css'
import Nav from "./nav/nav.jsx"
import Header from "./header/header.jsx"
import Company from "./company/company.jsx"
import Track from "./track/track.jsx"
import Category from "./category/category.jsx"
import WhyUs from "./whyuys/whyus.jsx"
import LinkMore from "./componenets/linkMore"
function App() {
  

  return (
    <>
    <div className='header'>
      <div className='padding-x smooth-border-bottom'>
        <Nav/>
      </div>
      <div className='padding-x '>
        <Header/>
      </div>
    </div>
    <Company/>
    <div className='padding-x '>
        <Track/>
        
    </div>
    <div className='padding-x '>
        <Category/>
    </div>
    <div className='padding-x '>
        <WhyUs/>
    </div>
    
    </>
  )
}

export default App
