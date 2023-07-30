import { useNavigate } from 'react-router'
import { Button, Typography } from '@mui/material'
import '@/app.css'

import TodoList from '@/components/TodoList'

function Todos() {
  const navigate = useNavigate()
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo 목록 페이지
      </Typography>
      <TodoList />
      <br />
      <Button type="button" variant="outlined" fullWidth={true} onClick={() => navigate('/add')}>
        +
      </Button>
    </>
  )
}

export default Todos
