import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  const response = await fetch(`http://localhost:3000/tickets/${id}`, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        error: 'Cannot find the ticket',
      },
      { status: 404 },
    );
  }

  const ticket = await response.json();

  return NextResponse.json(ticket, {
    status: 200,
  });
}
