import Head from 'next/head'
import Navbar from '../mods/Layout/Navbar'
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
		<Navbar />

		<div className="bg-stone-800 text-stone-100">

		</div>

		<Footer />
	</>
}

export default Home
