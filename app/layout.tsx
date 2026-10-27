export const metadata = {
  title: 'AI Study App',
  description: 'AI-powered study application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
