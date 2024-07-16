import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/header';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlanIt -管理者 ユーザー詳細-',
  description: 'PlanItのユーザー詳細画面です。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Header />
          <Box marginTop={8}>
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
