import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import MainCard from '@/components/cards/MainCard'

const CardWrapper = ({ children, ...other }: any) => (
  <MainCard
    sx={{
      minWidth: { xs: 400, lg: 475 },
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
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