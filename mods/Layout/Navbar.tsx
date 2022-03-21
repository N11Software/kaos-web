import Link from 'next/link'

let Navbar = () => {
  return <nav className="flex bg-stone-900 w-full px-16 py-4 items-center space-x-4">
    <Link href="/">
      <a className="text-stone-100 text-2xl font-bold luwh">Kaos</a>  
    </Link>
    <div className="flex justify-center w-full items-center space-x-12">
      <Link href="/store">
        <a className="text-stone-100 text-xl luwh">Store</a>  
      </Link>
      <Link href="/friends">
        <a className="text-stone-100 text-xl luwh">Friends</a>  
      </Link>
      <Link href="/streams">
        <a className="text-stone-100 text-xl luwh">Streams</a>  
      </Link>
    </div>
    <div className="flex justify-end items-center">
      <Link href="/login">
        <a className="text-stone-100 text-lg rounded px-4 py-1 bg-sky-500">Login</a>
      </Link>
    </div>
  </nav>
}

export default Navbar
