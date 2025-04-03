import React from 'react'
import { Link } from 'react-router-dom'
import DefaultImg from '../assets/Default.jpg'

const Default = () => {
  return (
    <div className='main'>
        <h2>Hello there, <br />
It's time to show another project of mine related to Valentine <br />
and that was created for my Valentine.</h2>
    <img src={DefaultImg} alt="Default Img" srcset={DefaultImg} />
    <h2>Tap <Link to={'/Home'}> Home Page </Link> navigation to be welcomed.</h2>
    </div>
  )
}

export default Default