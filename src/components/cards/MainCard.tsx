import PropTypes from 'prop-types'
import { forwardRef, ReactNode, CSSProperties } from 'react'

import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Divider } from '@mui/material'

interface MainCardProps {
  border?: boolean
  boxShadow?: boolean
  children: ReactNode
  content?: boolean
  contentClass?: string
  contentSX?: CSSProperties
  darkTitle?: boolean
  secondary?: ReactNode | string | object
  shadow?: string
  sx?: CSSProperties
  title?: ReactNode | string | object
}

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref,
  ) => {
    const theme = useTheme()

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.primary.light + 25, // 200
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit',
          },
          ...sx,
        }}
      >
        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    )
  },
)

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
}

export default MainCard
