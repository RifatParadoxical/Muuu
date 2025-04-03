import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import G1 from '../assets/G1.jpg'
import G2 from '../assets/G2.jpg'
import G3 from '../assets/G3.jpg'
import G4 from '../assets/G4.jpg'
import G5 from '../assets/G5.jpg'

const Gallery = () => {
  const [image, setImage] = useState([
    {"location": G1},{"location": G2},{"location":  G3},{"location": G4},{"location": G5}
  ])
  return (
    <div className='gallery'>
        <h2>Here are some images that I have saved to my gallery.</h2>
        <h2>This girl has stolen my heart from myself. If any righteous person found this girl in your local area, please inform me. I will bring her with myself forever. 🙃😫</h2>
        <div className='img-container'>
        {image.map((e, index)=>(
          <div className='images'>
            <img key={index} src={e.location} alt="" srcset={e.location} />
            </div>
          ))}
          </div>
        <h2>You should visit <Link to={'/Letter'}>Letter Page</Link> to get something there.</h2>
    </div>
  )
}

export default Gallery