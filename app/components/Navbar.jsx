import Image from "next/image"
import Link from "next/link"
import Logo from "./logo.png"
import LogoutButton from "./LogoutButton"

export default function Navbar({ user }) {
  return (
    <nav>
        <Image 
          src={Logo}
          alt="Helpdesk logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
          <h1> Helpdesk</h1>
          <Link href="/" >Dashboard </Link>
          <Link href="/tickets" >Tickets</Link>
          <Link className="mx-auto" href="/tickets/create">Create Ticket</Link>
        {user && <span>Hello, {user.email}</span>}
        <LogoutButton />
    </nav>
  )
}
