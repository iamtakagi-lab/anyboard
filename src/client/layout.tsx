import React from "react"
import { Header } from './components/header'
import { Footer } from './components/footer'

export const Layout: React.FC<{}> = ({ children }) => (
  <div className="min-h-screen w-full flex flex-col text-gray-800 leading-loose">
    <div className="relative z-20" id="modal-container" />
    <div className="flex-1">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)