import React from 'react'
import './style.css'
import Video from '../../video/VID-20210603-WA0135.mp4';
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import Link from '../link';
const VideoSection = (  ) => (
  <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full  h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" autoPlay loop muted src={Video} type='video/mp4'></video>
    </div>
    <div className="video-content space-y-2 mb-28">
  
    </div>

</section>
  </>
)
export default VideoSection
