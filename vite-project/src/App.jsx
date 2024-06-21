import {Provider} from "react-redux"
import './App.css'
import store from "./core/store/store"
import HomePage from "./pages/HomePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DonutPage from "./pages/donutPage"
import UpdateDonutPage from "./pages/updateDonutPage"
import FavoritesPage from "./pages/favoritesPage"
import ContactPage from "./pages/contactPage"

function App() {
  

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/donut" element={<DonutPage/>}></Route>
      <Route path="/updatedonut" element={<UpdateDonutPage/>}></Route>
      <Route path="/donutfavorite" element={<FavoritesPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
