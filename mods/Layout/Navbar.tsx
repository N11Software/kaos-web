import Link from 'next/link'
import Image from 'next/image'

let Navbar = props => {
  return <nav className="flex bg-stone-900 w-full px-16 py-4 items-center space-x-4">
    <Link href="/">
      <Image src="/images/favicon.png" alt="logo" width={32} height={32} />
    </Link>
    <Link href="/">
      <a className="text-stone-100 text-2xl font-bold luwh uppercase" id="navbar">kaos</a>
    </Link>
    <div className="flex justify-center w-full items-center space-x-12">
      <Link href="/store">
        <a className="text-stone-100 text-xl luwh uppercase" id="navbarLinks">store</a>
      </Link>
      <Link href="/friends">
        <a className="text-stone-100 text-xl luwh uppercase" id="navbarLinks">friends</a>
      </Link>
      <Link href="/streams">
        <a className="text-stone-100 text-xl luwh uppercase" id="navbarLinks">streams</a>
      </Link>
      <Link href="/library">
        <a className='text-stone-100 text-xl luwh uppercase' id="navbarLinks">library</a>
      </Link>
    </div>
    <div className="flex justify-end items-center">
      {props.user ? <Link href="/profile">
        <a className="text-stone-100 text-xl mr-4 flex items-center">
          <a className="luwh mr-2">{props.user.substr(0, props.user.length-5)}</a>
          <Image src="/images/avatar.png" className="rounded-full" width={48} height={48} />
        </a>
      </Link>: <Link href="/login">
        <a className="text-stone-100 text-lg rounded px-4 py-1 bg-blue-600 uppercase">login</a>
      </Link>}
      {/* All the user info above should be eventually replaced with info from the user api.  */}
      {/* The info shown above is for mock purposes */}
      {/* - 4tl */}
    </div>
  </nav>
}

export default Navbar
