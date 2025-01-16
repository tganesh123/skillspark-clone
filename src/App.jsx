import React, { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Head from "./components/common/heading/Head"
import "./index.css"
import Slider from "./components/Slider"
import Courses from "./components/programs/Courses"
import Title from "./components/title/Title"
import About from "./components/About/About"
import Partners from "./components/Partners/Partners"
import Review from "./components/Studentreview/Review"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Enroll from "./components/Enroll/Enroll"
import VideoAd from "./components/VideoAd/VideoAd"
import Description from "./components/Description/Description"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" // Import necessary router components
import EnrollForm from "./components/EnrollFrom/EnrollForm"
import Totop from "./components/Totop/Totop"
import Chat from "./components/Chat/Chat"

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <Router>
      {/* Wrap the app with BrowserRouter to enable routing */}
      <div>
        <Head />
        <Navbar />

        {/* Add Routes here */}
        <Routes>
          <Route path='/' element={<Slider />} />{" "}
          {/* Default route (home page) */}
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/review' element={<Review />} />
          <Route path='/enroll' element={<EnrollForm />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/description' element={<Description />} />
        </Routes>

        <div className='container1'>
          <Title subTitle='Our Program' title='What We Offer' />
          <Courses />
          <Title subTitle='Our Partners' title='for placement opportunities' />
          <Partners />
          <About />
          <Description />
          <Title
            subTitle='Students Review'
            title='see what our students has to say'
          />

          <Review />
          <Enroll setPlayState={setPlayState} />
          <Title subTitle='contact us' title='join us now !! inquiry easily' />
          <Contact />
          <Chat />
          <Totop />
          <Footer />
        </div>
        <VideoAd playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  )
}

export default App
