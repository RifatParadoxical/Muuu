import { useState } from 'react'
import SurpriseImg from '../assets/image.png'
import { useNavigate} from 'react-router-dom'

const Surprise = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({x: 0, y: 0})
  const clickedFunc = () => {
    navigate('/Happy');
  }
  const handleMouseOver = () => {
    const randomX = Math.random()*100
    const randomY = Math.random()*100
    setPosition({ x: randomX, y: randomY });
  }
  return (
    <div className='surprise'>
        <h2>Would YOU be my Valentine?</h2>
        <img src={SurpriseImg} alt="Surprise Image" srcSet={SurpriseImg} />
        <button className='yesss' onClick={clickedFunc}>Yes</button>
        <button  className='noo'
         onMouseOver={handleMouseOver} 
          style={{ 
            position: 'absolute', 
            left: `${position.x}vw`, 
            top: `${position.y}vh`, 
          }}>No</button>
    </div>
  )
}

export default Surprise