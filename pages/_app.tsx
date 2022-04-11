import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

let Page = ({ Component, pageProps }: AppProps) => {
  useEffect(()=>{
    document.body.classList.add("bg-stone-800")
  },[])
  return <Component {...pageProps} />
}

export default Page