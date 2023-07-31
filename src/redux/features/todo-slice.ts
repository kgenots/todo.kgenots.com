import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITodo, ITodoInput } from '@/redux/interface/todo'
import { RootState } from '@/redux/store'
import { getCurrentDateString } from '@/util/date-helper'
import Hashids from 'hashids'

function generateUID(str: string) {
  var hashids = new Hashids(str)
  return hashids.encode(1, 2, 3, 4, 5, 6, 7, 8)
}

const initialState: ITodo[] = [
  {
    id: 'example',
    title: 'Example 제목 #0',
    description: 'Example Description',
    tags: ['Ex1', 'Ex2'],
    created_date: '2023년 7월 31일 월요일 / 16시 54분 55초',
  } as ITodo,
]

export const todo = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, { payload }: PayloadAction<ITodo>) => {
        state.push(payload)
      },
      prepare: ({ title, description, tags }: ITodoInput) => {
        const now = getCurrentDateString()
        return {
          payload: {
            id: generateUID(now),
            title,
            description,
            tags,
            created_date: now,
          } as ITodo,
        }
      },
    },
    editTodo: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string
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

export const getTodo = (state: RootState, id: string): ITodo => state.todos.find((todo) => todo.id === id) as ITodo

export const { addTodo, editTodo } = todo.actions
export default todo.reducer
