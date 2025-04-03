import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/Home.jpg'

const Home = () => {
  return (
    <div className='home'>
        <h2>Welcome to my website</h2>
        <img src={HomeImg} alt="Home Image" srcSet={HomeImg} />
        <h2>Here is the webpage. You should visit to <Link to={'/Gallery'}>Gallery Page </Link>.</h2>
    </div>
  )
}

export default Home