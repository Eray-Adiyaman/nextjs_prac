// to note that all request can be done inside the server components and this routes are redundant but can be useful for future if i need them inside client components and ofc for practice purposes
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET() {
    const res = await fetch("http://localhost:4000/tickets")

    const tickets = await res.json();

    return NextResponse.json(tickets,{ status:200 })
}

export async function POST(request) { 
    const ticket = await request.json();


    const res = await fetch("http://localhost:4000/tickets",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    const newTicket = await res.json();

    return NextResponse.json(newTicket, { status: 201 })
}