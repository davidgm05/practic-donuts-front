import React, { useEffect, useState } from 'react'
import DonutComponet from '../componets/donutsComponets/donutComponent'
import { getDonutsData } from '../core/services/donutService'
import { useDispatch } from 'react-redux'
import { loadDonuts } from '../componets/donutsComponets/donutsActions'

const HomePage = () => {
  const [donutsListData, setDonutsListData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchDonuts = async () => {
      const donutsData = await getDonutsData()
      setDonutsListData(donutsData)
    }
    fetchDonuts()
  },[])

  useEffect(() => {
    dispatch(loadDonuts(donutsListData))
  },[donutsListData])
  return (
    <>
    <DonutComponet/>  
    </>
  )
}

export default HomePage
