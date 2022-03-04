import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  function pageName(pathname){
    if (pathname === '/'){
      return 'Home | '
    }
    else if (pathname == '/contact'){
      return 'Contact Us | '
    }
    else if (pathname == '/about'){
      return 'About Us | '
    }
    else{
      return ''
    }

  }
  return (
    <div className='bg-white overflow-x-hidden min-h-screen flex flex-col'>
      <Head>
        <title>{pageName(router.pathname)}Tosti</title>
        <meta property="og:title" content="Tosti Cafe & Kitchen" />
        <meta name="description" content="Come on in and enjoy some delicious food with us!" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="/tostiExt.png" />
      </Head>
      
      {router.pathname==="/" ? <></> : <Navbar/>}
      <Component {...pageProps} />
      <div className="mt-auto h-full">
        <Footer/>
      </div>
      
    </div>
  )
  
}

export default MyApp
