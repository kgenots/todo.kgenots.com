import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Box, Button, Typography } from '@mui/material'

import { ITodo } from '@/redux/interface/todo'
import { useAppSelector } from '@/redux/hooks'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }),
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function TodoList() {
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState<string | false>('pexample')
  const todos: ITodo[] = useAppSelector((state) => state.todos)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const onClickDetail = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <div>
      {todos &&
        todos.map((todo, idx) => (
          <Accordion key={'p' + todo.id} expanded={expanded === 'p' + todo.id} onChange={handleChange('p' + todo.id)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{todo.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography fontSize={12}>{todo.created_date}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 1, ml: 1 }}
                    onClick={() => onClickDetail(todo.id)}
                  >
                    상세 페이지
                  </Button>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  )
}

export default TodoList
