import { useNavigate } from 'react-router-dom'

import { Box, Button, Chip, Paper, Typography } from '@mui/material'

import { ITodo } from '@/redux/interface/todo'

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
    <Paper variant="outlined" sx={{ mb: { xs: 3 }, p: { xs: 2, md: 2 } }}>
      <Typography variant="h3" gutterBottom>
        {todo?.title}
      </Typography>
      <Typography variant="h4" gutterBottom mt={3} mb={1}>
        생성일
      </Typography>
      <Typography px={1}>{todo?.created_date}</Typography>
      <Typography variant="h4" gutterBottom mt={3} mb={1}>
        내용
      </Typography>
      <Typography px={1}>{todo?.description}</Typography>
      <Typography variant="h4" gutterBottom mt={3} mb={1}>
        태그 목록
      </Typography>
      <Box>
        {todo.tags &&
          todo.tags.length > 0 &&
          todo.tags.map((tag, idx) => {
            return <Chip key={idx} label={tag} style={{ marginLeft: 5, paddingLeft: 5, paddingRight: 5 }} />
          })}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="button" variant="contained" color="secondary" sx={{ mt: 3, ml: 1 }} onClick={onClickEdit}>
          수정
        </Button>
        <Button type="button" variant="outlined" color="secondary" sx={{ mt: 3, ml: 1 }} onClick={onClickGoList}>
          목록으로
        </Button>
      </Box>
    </Paper>
  )
}

export default TodoDetail
