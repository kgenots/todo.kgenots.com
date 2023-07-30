import { ITodo } from '@/redux/interface/todo'
import { Box, Button, Chip, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export interface TodoDetailProps {
  todo: ITodo
}

function TodoDetail({ todo }: TodoDetailProps) {
  const navigate = useNavigate()
  const onClickEdit = () => {
    navigate(`/detail/${todo?.id}?m=edit`)
  }
  const onClickGoList = () => {
    navigate(`/`)
  }
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2, md: 2 } }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {todo?.title}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {todo?.description}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {todo?.created_date}
      </Typography>
      {todo.tags &&
        todo.tags.length > 0 &&
        todo.tags.map((tag, idx) => {
          return <Chip key={idx} label={tag} />
        })}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="button" variant="contained" sx={{ mt: 3, ml: 1 }} onClick={onClickEdit}>
          수정
        </Button>
        <Button type="button" variant="outlined" sx={{ mt: 3, ml: 1 }} onClick={onClickGoList}>
          목록으로
        </Button>
      </Box>
    </Paper>
  )
}

export default TodoDetail
