import React from 'react'
import Hero from '../../components/elements/about/Hero'
import TalkUs from '../../components/elements/home/TalkUs'

const index = () => {
  return (
    <>
      <Hero />
      <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C8EEF5" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,117.3C640,107,800,117,960,112C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div style={{ backgroundColor: '#C8EEF5' }}>
          <TalkUs />
        </div>
      </div>
    </>
  )
}

export default index