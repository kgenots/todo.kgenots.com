import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import MainCard from '@/components/cards/MainCard'

const CardWrapper = ({ children, ...other }: any) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      minWidth: { xs: '85vw', lg: '40vw' },
      width: '100%',
      margin: 'auto',
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
)

CardWrapper.propTypes = {
  children: PropTypes.node,
}

export default CardWrapper
