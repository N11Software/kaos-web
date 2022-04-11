import Head from 'next/head'
import Navbar2 from '../mods/Layout/Navbar2'
import Footer from '../mods/Layout/Footer'

let Home = () => {
	return <>
		<Head>
			<title>Kaos - Library</title>
			<meta name="description" content="Kaos, your place to create, discuss, and play your game." />
			{/* <link rel="icon" href="/favicon.ico" /> */}
			{/* We don't have a logo yet. */}
			{/* - FiRe */}
		</Head>
		<Navbar2 />

		<div className="h-screen bg-stone-800 text-stone-100">

		</div>

		<Footer />
	</>
}

export default Home
