'use client'

import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()
  const onClickAddTodo = () => {
    router.push('/add')
  }
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo 목록 페이지
      </Typography>
      <Button type="button" variant="outlined" fullWidth={true} onClick={onClickAddTodo}>
        +
      </Button>
    </>
  )
}

export default Home
