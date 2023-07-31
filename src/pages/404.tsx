import { Box, Button, Container, Grid, Typography } from '@mui/material'

function NotFound() {
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <Grid container spacing={2}>
              <Grid item={true} xs={6}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h6" my={2}>
                  The page you’re looking for doesn’t exist.
                </Typography>
                <Button href="/" variant="contained" color="secondary">
                  Back Home
                </Button>
              </Grid>
              <Grid item={true} xs={6}>
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                  alt=""
                  width={500}
                  height={250}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound
