import { useRoutes } from 'react-router-dom'

import MainRoutes from './MainRoutes'
import NoStyleRoutes from './NoStyleRoutes'

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, NoStyleRoutes])
}
