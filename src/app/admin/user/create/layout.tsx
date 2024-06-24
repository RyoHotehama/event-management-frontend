import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/header';
import "../../../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlanIt -管理者 アカウント作成-',
  description: 'PlanItのアカウント作成画面です。',
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
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
