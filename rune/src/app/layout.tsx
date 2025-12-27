import Providers from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ width: "100%", height: "100%" }}>
      <body style={{ width: "100%", height: "100%", margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
