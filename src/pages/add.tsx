import { useNavigate } from 'react-router-dom'

import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import TodoForm from '@/components/TodoForm'
import { ITodoInput } from '@/redux/interface/todo'
import { useAppDispatch } from '@/redux/hooks'
import { addTodo } from '@/redux/features/todo-slice'

const defaultValues = {
  title: '',
  description: '',
  tags: [],
} as ITodoInput

type FormValues = {
  title: string
  description: string
  tags: string[]
}

const AddTodo = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  const onSuccess = (data: FormValues) => {
    try {
      dispatch(addTodo(data))
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1} mb={2}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                Todo 추가 페이지
              </Typography>
              <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                Todo를 추가하는 페이지입니다.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TodoForm defaultValues={defaultValues} onSuccess={onSuccess} />
      </Grid>
    </>
  )
}

export default AddTodo
