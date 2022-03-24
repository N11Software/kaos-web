import Image from 'next/image'

let Footer = () => {
  return <footer className="flex py-8 justify-center items-center bg-black space-x-8">
    <a href="https://n11software.com">
      <Image src="/images/N11-Logo-Alternate-Transparent.png" width={75} height={50} />
    </a>
    <p className="text-white text-lg text-center" id="copyrightFooter">COPYRIGHT © 2022 N11 SOFTWARE. ALL RIGHTS RESERVED.</p>
  </footer>
}

export default Footer
