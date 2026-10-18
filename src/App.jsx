import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'

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


      {/* React toastify */}
      <ToastContainer />
    </>
  )
}

export default App
