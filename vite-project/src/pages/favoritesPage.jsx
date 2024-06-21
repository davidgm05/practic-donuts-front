import React, { useEffect, useState } from 'react'
import { deleteFavorites, getFavoritesData } from '../core/services/donutService'
import { getRandomColor } from '../core/utils'
import { useNavigate } from 'react-router-dom'

const FavoritesPage = () => {
    const [favoritesList, setFavoritesList] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchFavorites = async () => {
            const favorites = await getFavoritesData()
            setFavoritesList(favorites)
        }
        fetchFavorites()
    },[])

    const deleteDonutToFavoriteHandler = async (id) => {
        await deleteFavorites(id)
        const favorites = await getFavoritesData()
        setFavoritesList(favorites)
    }

    const volverButtonHandler = () => {
      navigate("/")
    }
  return (
    <div>
      {favoritesList && 
      <div>
        <div><button className='button-volver' onClick={volverButtonHandler}>volver</button></div>
        <div className='container-donuts'>
        {favoritesList.map((favorite, i) => (
           <div className='donut-container'>
           <div className='donut'>
           <div style={{backgroundColor: `${getRandomColor()}`}} className='glaseado-donut'>
             <div className='borde-interior-donut'>
               <div className='hueco-donut'>
               <div className='container-info' key={i}>
                   <p>{favorite.favoritos.nombre}</p>
                   <p>{favorite.favoritos.sabor}</p>
                   <p>{favorite.favoritos.precio + "$"}</p>
               </div>
               </div>
             </div>
             <div className='glassed-buttons'>
             <button onClick={() => deleteDonutToFavoriteHandler(favorite._id)}>eliminar</button>
             </div>
           </div>
         </div>
         </div>
        ))}
        </div>
    </div>
      }
    </div>
    
  )
}

export default FavoritesPage
