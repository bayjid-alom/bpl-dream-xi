import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

const fetchPlayers = async () => {
  const res = await fetch('players-data.json')
  return res.json()
}


function App() {
  const playersPromise = fetchPlayers()

  const [coin, setCoin] = useState(300000)


  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>


      <Suspense fallback={<div className='flex justify-center mx-auto text-black py-10'>
        <span className="loading loading-dots loading-xl"></span>
      </div>}>

        <Players setCoin={setCoin} coin={coin} playersPromise={playersPromise} ></Players>
      </Suspense>


      <Subscribe></Subscribe>

      <Footer></Footer>

      {/* React toastify */}
      <ToastContainer />
    </>
  )
}

export default App
