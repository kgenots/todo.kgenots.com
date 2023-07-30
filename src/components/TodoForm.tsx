import { ITodo, ITodoInput } from '@/redux/interface/todo'
import { Autocomplete, Box, Button, Chip, Paper, Typography, createFilterOptions } from '@mui/material'
import { useState } from 'react'
import {
  FormContainer,
  SubmitHandler,
  TextFieldElement,
  TextareaAutosizeElement,
  AutocompleteElement,
  useForm,
  useFormContext,
  Control,
  FormState,
} from 'react-hook-form-mui'
import { useNavigate } from 'react-router'

export interface TodoFormProps {
  defaultValues: ITodoInput
  onSuccess: SubmitHandler<any>
}

const filter = createFilterOptions<string>()

function TodoForm({ defaultValues, onSuccess }: TodoFormProps) {
  const navigate = useNavigate()
  const [value, setValue] = useState<string>('')

  const [tags, setTags] = useState<string[]>([])

  const onClickGoBack = () => {
    navigate(-1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Data submitted: ', data)
  }

  const detectable = false

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2, md: 2 } }}>
      <FormContainer defaultValues={defaultValues} onSuccess={onSuccess} handleSubmit={handleSubmit}>
        <TextFieldElement
          id="title"
          name="title"
          label="제목"
          placeholder="제목을 입력해주세요"
          required
          margin={'dense'}
        />
        <br />
        <TextareaAutosizeElement
          id="description"
          name="description"
          fullWidth={true}
          label="내용"
          placeholder="내용을 입력해주세요"
          margin={'dense'}
          rows={10}
        ></TextareaAutosizeElement>
        <br />
        <Typography variant="h6" gutterBottom mt={2}>
          기타
        </Typography>
        <AutocompleteElement
          name="tags"
          multiple
          options={tags}
          label="태그"
          autocompleteProps={{
            freeSolo: true,
            disableClearable: true,
            limitTags: 5,
            isOptionEqualToValue: (option, value) => option === value,
            renderTags: (value, getTagProps) =>
              value.map((option: any, index: any) => (
                <Chip variant="filled" label={option} {...getTagProps({ index })} />
              )),
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
            제출
          </Button>
          <Button type="button" variant="outlined" sx={{ mt: 3, ml: 1 }} onClick={onClickGoBack}>
            돌아가기
          </Button>
        </Box>
      </FormContainer>
    </Paper>
  )
}

export default TodoForm
