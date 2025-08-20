import React from 'react'

function Main() {
  return (
    <div className='main-container'>
    <div className='left-text'>
        <h2 className='had'>Find anything.<br /> Protect everything.</h2>
        <p>Find, organize, and protect your work with Dropbox<br /> Dash. Now with advanced search for video,<br /> images, and team members—plus generative AI<br /> capabilities across even more connected apps.</p>
        <button className='main-button'>What's new with Dash</button>
        <a href=''>Try Dropbox free</a>
    </div>
    <img id='main-image' src='https://images.unsplash.com/photo-1754587705782-37ac92994925?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default Main