import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <nav>
        <Link href="/">
        <a>HTML</a>
        </Link>
       { " | " }
       <Link href="/">
        <a>About</a>
        </Link>
       { " | " }
       <Link href="/">
        <a>Services</a>
        </Link>
       { " | " }
       <Link href="/">
     <a onClick={() => signOut()}>Sign in</a>
     </Link>
    </nav>
    </>
    )
  }
  return (
    <>
    <nav>
      <Link href="/">
      <a>HTML</a>
      </Link>
     { " | " }
     <Link href="/">
      <a>About</a>
      </Link>
     { " | " }
     <Link href="/">
      <a>Services</a>
      </Link>
     { " | " }
     <Link href="/">
     <a onClick={() => signIn()}>Sign in</a>
     </Link>
  </nav>
  </>
  )
}


