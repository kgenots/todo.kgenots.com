import { useNavigate } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'
import { Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material'

import ContentWrapper from '@/components/ContentWrapper'
import CardWrapper from '@/components/CardWrapper'
import TodoList from '@/components/TodoList'

const Todos = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  function onClickGoAdd() {
    navigate('/add')
  }

  return (
    <ContentWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <CardWrapper>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={matchDownSM ? 'column-reverse' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Stack alignItems="center" justifyContent="center" spacing={1} mb={2}>
                        <Typography
                          color={theme.palette.secondary.main}
                          gutterBottom
                          variant={matchDownSM ? 'h3' : 'h2'}
                        >
                          Todo 목록 페이지
                        </Typography>
                        <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                          Todo 목록을 불러오는 페이지입니다.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TodoList />
                </Grid>
                <Grid item xs={12} mt={1}>
                  <Button type="button" variant="outlined" color="secondary" fullWidth={true} onClick={onClickGoAdd}>
                    +
                  </Button>
                </Grid>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  )
}

export default Todos
