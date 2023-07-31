import { useNavigate } from 'react-router-dom'
import { Box, Button, Chip, Divider, Paper, Typography } from '@mui/material'
import {
  FormContainer,
  SubmitHandler,
  TextFieldElement,
  TextareaAutosizeElement,
  AutocompleteElement,
} from 'react-hook-form-mui'

import { ITodoInput } from '@/redux/interface/todo'

import { Validation } from '@/validations'

export interface TodoFormProps {
  defaultValues: ITodoInput
  onSuccess: SubmitHandler<any>
}

function TodoForm({ defaultValues, onSuccess }: TodoFormProps) {
  const navigate = useNavigate()
  const onClickGoBack = () => {
    navigate(-1)
  }

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2, md: 2 } }}>
      <FormContainer defaultValues={defaultValues} onSuccess={onSuccess}>
        <Typography variant="h6" gutterBottom my={1}>
          필수
        </Typography>
        <TextFieldElement
          id="title"
          name="title"
          label="제목"
          placeholder="제목을 입력해주세요"
          required
          validation={{
            required: '제목을 입력해주세요',
            validate: Validation.TodoFormTitleValidate,
          }}
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
          required
          validation={{
            required: '내용을 입력해주세요',
            validate: Validation.TodoFormDescriptionValidate,
          }}
        ></TextareaAutosizeElement>
        <Divider sx={{ m: { xs: 1, sm: 3 }, mb: 0 }} />
        <Typography variant="h6" gutterBottom my={1}>
          기타
        </Typography>
        <AutocompleteElement
          name="tags"
          multiple
          options={[] as string[]}
          label="태그"
          autocompleteProps={{
            freeSolo: true,
            disableClearable: true,
            isOptionEqualToValue: (option, value) => option === value,
            renderTags: (value, getTagProps) =>
              value.map((option: any, index: any) => (
                <Chip variant="filled" label={option} {...getTagProps({ index })} />
              )),
          }}
          textFieldProps={{
            placeholder: '(선택) 단어를 입력 후 Enter를 치면 태그가 등록됩니다',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3, ml: 1 }}>
            제출
          </Button>
          <Button type="button" variant="outlined" color="secondary" sx={{ mt: 3, ml: 1 }} onClick={onClickGoBack}>
            돌아가기
          </Button>
        </Box>
      </FormContainer>
    </Paper>
  )
}

export default TodoForm
