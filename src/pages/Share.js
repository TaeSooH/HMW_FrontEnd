import React from 'react'
import Header from '../components/Header'
import SharedSet from '../components/SharedSet'
import "../styles/Share.css"

const Share = ({name}) => {
  return (
    <>
    <div className="container">
      <Header username={name} />
      <div className='Share_container'>
        
        <div className='fl_box'>
          <SharedSet />
          <SharedSet />
          <SharedSet />
          <SharedSet />
          <SharedSet />
          <SharedSet />
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Share