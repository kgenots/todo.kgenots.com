import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../interface/todo'

let nextId = 0

export const todo = createSlice({
  name: 'todos',
  initialState: [] as ITodo[],
  reducers: {
    addTodo: {
      reducer: (state, { payload }: PayloadAction<ITodo>) => {
        state.push(payload)
      },
      prepare: ({ title, description, tags }: { title: string; description: string; tags: string[] }) => ({
        payload: {
          id: nextId++,
          title,
          description,
          tags,
        } as ITodo,
      }),
    },
    editTodo: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number
        title: string
        description: string
        tags: string[]
      }>,
    ) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id)
      if (todoToEdit) {
        todoToEdit.title = payload.title
        todoToEdit.description = payload.description
        todoToEdit.tags = payload.tags
      }
    },
  },
})

export const { addTodo, editTodo } = todo.actions
export default todo.reducer
