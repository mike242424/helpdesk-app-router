import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:3000/tickets', {
    cache: 'no-cache',
  });
  const tickets = await res.json();
  return NextResponse.json(tickets, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const ticket = await request.json();

  const response = await fetch('http://localhost:3000/tickets', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  const newTicket = await response.json();

  return NextResponse.json(newTicket, {
    status: 201,
  });
}
