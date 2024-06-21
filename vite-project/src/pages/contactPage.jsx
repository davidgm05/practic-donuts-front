import React from 'react'
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate()
  const volverButtonHandler = () => {
    navigate("/")
  }
  return (
    <div>
      <div><button className='button-volver' onClick={volverButtonHandler}>volver</button></div>
    <div className='model-3d'>
       <Spline scene="https://prod.spline.design/gRr8MrnXAiU4PGEw/scene.splinecode" />
    </div>
    </div>
  )
}

export default ContactPage
