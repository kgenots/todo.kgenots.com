import { Box, Button, Typography, TextField, Stack, Paper, Chip } from '@mui/material'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getTodo, editTodo } from '@/redux/features/todo-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import TodoForm from '@/components/TodoForm'
import { ITodo, ITodoInput } from '@/redux/interface/todo'
import TodoDetail from '@/components/TodoDetail'

function DetailTodo() {
  const { id } = useParams()
  const [query] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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

  return mode && mode === 'edit' ? (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo 수정 페이지
      </Typography>
      <TodoForm defaultValues={todo} onSuccess={onSuccess} />
    </>
  ) : (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo 상세 페이지
      </Typography>
      <TodoDetail todo={todo} />
    </>
  )
}

export default DetailTodo
