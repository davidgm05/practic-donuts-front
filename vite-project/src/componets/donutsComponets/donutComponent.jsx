import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDonutById, loadDonuts } from './donutsActions'
import { useNavigate } from 'react-router-dom'
import { addFavorites, getDonutsData, postDonut } from '../../core/services/donutService'
import { getRandomColor } from '../../core/utils'

const DonutComponent = () => {
  const donutsFromReducer = useSelector((state) => state.donutsReducer.donuts)
  const [donutsList, setDonutsList] = useState([])
  const [newDonut, setNewDonut] = useState({})
  const dispatch = useDispatch() 
  const navigate = useNavigate()

  useEffect(() => {
    if(donutsList){
      setDonutsList(donutsFromReducer)
    }
  },[donutsFromReducer])

  const clickDonut = async (id) => {
    dispatch(getDonutById(id))
    navigate("/donut")
    
  }

  const addNewDonutInputHandler = (e) => {
    setNewDonut({
      ...newDonut,
      [e.target.name]: e.target.value,
    })
  }

  const addNewDonutHandler = async () => {
    await postDonut(newDonut)
    const donuts = await getDonutsData()
    dispatch(loadDonuts(donuts))
  }

  const favoritosButtonHandler = () => {
    navigate("/donutfavorite")
  }

  const addFavoritesHandler = async (id) => {
    await addFavorites(id)
  }

  const contactButtonHandler = () => {
    navigate("/contact")
  }
  return (
    <div>
      <div className='crearUser'>
        <input type="text" name='nombre' placeholder='nombre' onChange={(e) => addNewDonutInputHandler(e)}/>
        <input type="text" name='sabor' placeholder='sabor' onChange={(e) => addNewDonutInputHandler(e)}/>
        <input type="text" name='precio' placeholder='precio' onChange={(e) => addNewDonutInputHandler(e)}/>
        <button className='buttons-pink' onClick={addNewDonutHandler}>crear</button>
        <button className='buttons-pink' onClick={favoritosButtonHandler}>favoritos</button>
        <button className='buttons-pink' onClick={contactButtonHandler}>contacto</button>
      </div>
      <div className='container-donuts'>
      {donutsList && donutsList.map((donut, i) => (
        <div className='donut-container'>
        <div className='donut'>
        <div style={{backgroundColor: `${getRandomColor()}`}} className='glaseado-donut'>
          <div className='borde-interior-donut'>
            <div className='hueco-donut'>
            <div className='container-info' key={i}>
          <p>{donut.nombre}</p>
          <p>{donut.sabor}</p>
          <p>{donut.precio + "$"}</p>
        </div>
            </div>
          </div>
          <div className='glassed-buttons'>
          <button onClick={() => clickDonut(donut._id)}>mas detalles</button>
          <button onClick={() => addFavoritesHandler(donut._id)}>añadir a favoritos</button>
          </div>
        </div>
      </div>
        </div>
      ))}
      </div>
      
    </div>
    
  )
}

export default DonutComponent
