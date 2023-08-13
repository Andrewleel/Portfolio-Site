import React from 'react'
import Profile from './../components/Profile'
import Description from './../components/Description'
import SocialMedia from './../components/SocialMedia'
import Header from './../components//Header'
import Project from './../components/Project'
import './Main.css'

const Main = () => {
  return (
    <div>
        <div className ="header">
            <Header />
        </div>
        <Profile />
        <Description />
        <SocialMedia />
    </div>
  )
}

export default Main