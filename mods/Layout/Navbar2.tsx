import Link from 'next/link'
import Image from 'next/image'

let Navbar2 = () => {
	return <nav className="flex bg-stone-900 w-full px-16 py-4 items-center space-x-4">
		<Link href="/">
			<Image src="/images/favicon.png" alt="logo" width={32} height={32} />
		</Link>
		<Link href="/">
			<a className="text-stone-100 text-2xl font-bold luwh" id="KAOS-navbar">KAOS</a>
		</Link>
		<div className="flex justify-center w-full items-center space-x-12">
			<Link href="/store">
				<a className="text-stone-100 text-xl luwh" id="navbarLinks">STORE</a>
			</Link>
			<Link href="/friends">
				<a className="text-stone-100 text-xl luwh" id="navbarLinks">FRIENDS</a>
			</Link>
			<Link href="/streams">
				<a className="text-stone-100 text-xl luwh" id="navbarLinks">STREAMS</a>
			</Link>
			<Link href="/library">
				<a className='text-stone-100 text-xl luwh' id="navbarLinks">LIBRARY</a>
			</Link>
		</div>
		<div className="flex justify-end items-center">
			<Link href="/profile">
				<Image src="/images/avatar.png" width={44} height={44} />
			</Link>
			<Link href="/profile">
				<a className="text-stone-100 text-xl luwh">n11user</a>
			</Link>
			{/* All the user info above should be eventually replaced with info from the user DB.  */}
			{/* The info shown above is for mock purposes */}
			{/* - 4tl */}
		</div>
	</nav>
}

export default Navbar2
