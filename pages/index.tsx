import Head from 'next/head'
import Navbar1 from '../mods/Layout/Navbar1'
import Footer from '../mods/Layout/Footer'

let Home = () => {
  return <>
    <Head>
      <title>Kaos</title>
      <meta name="description" content="Kaos, your place to create, discuss, and play your game." />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* We don't have a logo yet. */}
      {/* - FiRe */}
    </Head>
    <Navbar1 />

    <div className="h-screen bg-stone-800 text-stone-100">
      This is just a placeholder for the home page.
    </div>

    <Footer />
  </>
}

export default Home
