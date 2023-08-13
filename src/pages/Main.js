import React from 'react'
import Profile from './../components/Profile'
import Description from './../components/Description'
import SocialMedia from './../components/SocialMedia'
import Header from './../components//Header'

const Main = () => {
  return (
    <div>
        <Header />
        <Profile />
        <Description />
        <SocialMedia />
    </div>
  )
}

export default Main