import React from "react"
import "./VideoAd.css"
import thumb from "../../assets/thumb.jpg"
import video from "../../assets/adVideo.mp4"
import { FaPlay } from "react-icons/fa"

const VideoAd = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? "" : "hide"}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoAd
