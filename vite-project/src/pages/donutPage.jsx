import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDonut, getDonutDataById, getDonutsData } from '../core/services/donutService'
import { loadDonuts } from '../componets/donutsComponets/donutsActions'
import { useNavigate } from 'react-router-dom'
import { getRandomColor } from '../core/utils'

const DonutPage = () => {
    const [donutData, setDonutData] = useState(undefined)
    const donutIdFronReducer = useSelector((state) => state.donutsReducer.donutId)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getDonutByIdFetch = async () => {
            const donut = await getDonutDataById(donutIdFronReducer)
            setDonutData(donut)
            console.log(donutData)
        } 
        getDonutByIdFetch()
    },[])
    const deleteDonutHandler = async (id) => {
        await deleteDonut(id)
        const donuts = await getDonutsData()
        dispatch(loadDonuts(donuts))
        navigate("/")
    }

    const updateDonut = () => {
      navigate("/updatedonut");
    }

    const volverButtonHandler = () => {
      navigate("/")
    }
  return (
    <div>
      <div><button className='button-volver' onClick={volverButtonHandler}>volver</button></div>
      {donutData && 
      <div className='donut-contain'>
      <div className='donut'>
      <div style={{backgroundColor: `${getRandomColor()}`}} className='glaseado-donut'>
        <div className='borde-interior-donut'>
          <div className='hueco-donut'>
          <div className='container-info'>
          <p>{donutData.nombre}</p>
          <p>{donutData.sabor}</p>
          <p>{donutData.precio + "$"}</p>
          </div>
          </div>
        </div>
        <div className='glassed-buttons'>
        <button onClick={() => deleteDonutHandler(donutData._id)}>eliminar</button>
        <button onClick={updateDonut}>actualizar</button>
        </div>
      </div>
    </div>
    </div>
     }
    </div>
  )
}

export default DonutPage
