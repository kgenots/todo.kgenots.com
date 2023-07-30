import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'

import wrapper from '@/redux/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
