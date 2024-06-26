'use client'

import { ThemeProvider } from 'next-themes'

const DarkModeProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default DarkModeProviders