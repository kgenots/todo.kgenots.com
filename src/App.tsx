import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'

import MainLayout from './layout/MainLayout'

import Todos from './pages/index'
import AddTodo from './pages/add'
import DetailTodo from './pages/detail'
import NotFound from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/add" element={<AddTodo />}></Route>
          <Route path="/detail/:id" element={<DetailTodo />}></Route>
          <Route path="/" element={<Todos />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
