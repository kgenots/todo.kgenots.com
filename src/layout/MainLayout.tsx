import Footer from '@/components/Footer'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ my: 5 }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
