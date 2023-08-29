import './App.css'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Priority from './Component/Priority'
import Service from './Component/Service'
import Specification from './Component/Specification'
import Testimonials from './Component/Testimonials'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Service />
        <Priority />
        <Specification />
        <Testimonials />
      </div>
    </>
  )
}

export default App
