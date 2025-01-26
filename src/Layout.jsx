import React from "react"
import Head from "./components/common/heading/Head"
import Footer from "./components/Footer/Footer"
import Chat from "./components/Chat/Chat"
import Navbar from "./components/navbar/Navbar"
import Totop from "./components/Totop/Totop"
import { Outlet } from "react-router-dom"
import Footer2 from "./pages/Footer2/Footer2"
import ContactUsToday from "./components/ContactUsToday/ContactUsToday"

const Layout = () => {
  return (
    <>
      <div>
        <Head />
        <Navbar />
        <Outlet />
        <Chat />
        <ContactUsToday />
        <Totop />
        <Footer2 />
        <Footer />
      </div>
    </>
  )
}

export default Layout
