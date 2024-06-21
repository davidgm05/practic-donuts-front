import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDonutDataById, updateDonut } from '../core/services/donutService'
import { useNavigate } from 'react-router-dom'

const UpdateDonutPage = () => {
    const donutIdFronReducer = useSelector((state) => state.donutsReducer.donutId)
    const [donutToUpdate, setDonutToUpdate] = useState(undefined)
    const [updatedDonut, setUpdatedDonut] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {

        const getDonutByIdFetch = async () => {
            const donutToUpdateData = await getDonutDataById(donutIdFronReducer)
            setDonutToUpdate(donutToUpdateData)
            console.log(donutToUpdate)
        } 
        getDonutByIdFetch()
    },[])

    const updateDonutInputHandler = (e) => {
        setUpdatedDonut({
            ...updatedDonut,
            [e.target.name]: e.target.value,
        })
    }

    const updateDonutHandler = async () => {
        await updateDonut(donutIdFronReducer, updatedDonut)
        navigate("/")
    }

    const volverButtonHandler = ()=> {
      navigate("/")
    }
  return (
    <div>

      {donutToUpdate && 
      <div>
        <div>
        <div><button className='button-volver' onClick={volverButtonHandler}>volver</button></div>
        </div>
      <div className='update-user'>
        <input type="text" name='nombre' placeholder={donutToUpdate.nombre} onChange={(e) => updateDonutInputHandler(e)}/>
        <input type="text" name='sabor' placeholder={donutToUpdate.sabor} onChange={(e) => updateDonutInputHandler(e)}/>
        <input type="text" name='precio' placeholder={donutToUpdate.precio} onChange={(e) => updateDonutInputHandler(e)}/>
        <button className='buttons-pink' onClick={updateDonutHandler}>actualizar donut</button>
      </div>
      </div>
      }
    </div>
  )
}

export default UpdateDonutPage
