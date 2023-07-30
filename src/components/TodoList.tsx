import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import { useAppSelector } from '@/redux/hooks'

import { ITodo } from '@/redux/interface/todo'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

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
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function TodoList() {
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState<string | false>('p0')
  const todos: ITodo[] = useAppSelector((state) => state.todos)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const onClickDetail = (idx: number) => {
    navigate(`/detail/${idx}`)
  }

  return (
    <div>
      {todos &&
        todos.map((todo, idx) => (
          <Accordion key={'p' + idx} expanded={expanded === 'p' + idx} onChange={handleChange('p' + idx)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{todo.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{todo.description}</Typography>
              <Typography fontSize={12}>{todo.created_date}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="button" variant="contained" sx={{ mt: 1, ml: 1 }} onClick={() => onClickDetail(idx)}>
                  상세 페이지
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  )
}

export default TodoList
