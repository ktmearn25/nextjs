import '../styles/globals.css'
import Nav from "../components/navbar"
import { SessionProvider } from "next-auth/react"

export default function MyApp ({ Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
          <SessionProvider session={session}>
          <Nav />
      <Component {...pageProps} />
    </SessionProvider>
    </div>

  )
}