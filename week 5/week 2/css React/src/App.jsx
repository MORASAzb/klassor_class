import './App.css'
import Nav from "./nav/nav.jsx"
import Header from "./header/header.jsx"
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
    </>
  )
}

export default App
