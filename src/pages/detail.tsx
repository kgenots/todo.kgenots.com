import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import TodoForm from '@/components/TodoForm'
import TodoDetail from '@/components/TodoDetail'
import { ITodo, ITodoInput } from '@/redux/interface/todo'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getTodo, editTodo } from '@/redux/features/todo-slice'

function DetailTodo() {
  const { id } = useParams()
  const [query] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  const todo = useAppSelector((state) => getTodo(state, Number(id))) as ITodo
  const mode = query.get('m')

  const onSuccess = (data: ITodoInput) => {
    try {
      dispatch(editTodo({ id: todo.id, ...data }))
      navigate(`/detail/${id}`)
    } catch (e: any) {
      alert(e.message)
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1} mb={2}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                {mode && mode === 'edit' ? 'Todo 수정 페이지' : 'Todo 상세 페이지'}
              </Typography>
              <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                {mode && mode === 'edit' ? 'Todo를 수정하는 페이지입니다.' : 'Todo를 보여주는 페이지입니다.'}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {mode && mode === 'edit' ? <TodoForm defaultValues={todo} onSuccess={onSuccess} /> : <TodoDetail todo={todo} />}
      </Grid>
    </>
  )
}

export default DetailTodo
