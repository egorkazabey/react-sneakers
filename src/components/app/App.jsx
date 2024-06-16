import Header from '../header/Header'
import SideBar from '../side-bar/SideBar.jsx'
import Slider from '../slider/Slider'
import Sneakers from '../sneakers/Sneakers'

import './App.scss'

function App() {

  return (
    <div>
        <Header />
        <Slider />  
        <Sneakers />
        <SideBar/>
    </div>
  )
}

export default App
