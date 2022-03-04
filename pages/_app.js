import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className='bg-white overflow-x-hidden min-h-screen flex flex-col'>
      
      {router.pathname==="/" ? <></> : <Navbar/>}
      <Component {...pageProps} />
      <div className="mt-auto h-full">
        <Footer/>
      </div>
      
    </div>
  )
  
}

export default MyApp
