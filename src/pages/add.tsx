import { useForm, FormProvider } from 'react-hook-form'
import { Box, Grid, Button, Container, Typography, TextField, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormContainer, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui'
import { addTodo } from '@/redux/features/todo-slice'
import { useAppDispatch } from '@/redux/hooks'
import TodoForm from '@/components/TodoForm'
import { ITodoInput } from '@/redux/interface/todo'

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

//TODO: Chip component

function AddTodo() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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
      <Typography variant="h4" component="h1" gutterBottom>
        Todo 추가 페이지
      </Typography>
      <TodoForm defaultValues={defaultValues} onSuccess={onSuccess} />
    </>
  )
}

export default AddTodo
