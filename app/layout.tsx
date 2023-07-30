import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Box } from '@mui/material'
import { ReduxProvider } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TODO App',
  description: 'Generate TODO List',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ReduxProvider>
          <Container maxWidth="md">
            <Box sx={{ my: 5 }}>{children}</Box>
          </Container>
        </ReduxProvider>
      </body>
    </html>
  )
}
