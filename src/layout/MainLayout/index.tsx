import { Outlet } from 'react-router-dom'

import { Grid } from '@mui/material'

import CardWrapper from '@/components/CardWrapper'
import ContentWrapper from '@/components/ContentWrapper'

const MinimalLayout = () => (
  <>
    <ContentWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <CardWrapper>
                <Outlet />
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  </>
)

export default MinimalLayout
