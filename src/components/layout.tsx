import React from "react"
import { Header } from './header'
import { Footer } from './footer'

export const Layout: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => (
  <div className="min-h-screen w-full flex flex-col text-gray-800 leading-loose">
    <div className="relative z-20" id="modal-container" />
    <div className="flex-1">
      <Header />
        <Component {...pageProps} />
    </div>
    <Footer />
  </div>
)