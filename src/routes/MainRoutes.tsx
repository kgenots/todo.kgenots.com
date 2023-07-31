import MainLayout from '@/layout/MainLayout'

import Todos from '@/pages'
import AddTodo from '@/pages/add'
import DetailTodo from '@/pages/detail'

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Todos />,
    },
    {
      path: 'add',
      element: <AddTodo />,
    },
    {
      path: 'detail/:id',
      element: <DetailTodo />,
    },
  ],
}

export default MainRoutes
