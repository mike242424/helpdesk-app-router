import { Ticket } from '@/app/types/ticket';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await fetch(`http://localhost:4000/tickets/${id}`);
  const data = await response.json();

  return {
    title: `Helpdesk | ${data.title}`,
  };
}

export async function generateStaticParams() {
  const response = await fetch('http://localhost:4000/tickets');

  const tickets = await response.json();

  return tickets.map((ticket: Ticket) => {
    return { id: ticket.id };
  });
}

async function getTicket(id: string) {
  const response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    notFound();
  }
  return await response.json();
}

export default async function TicketDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const ticket = await getTicket(id);
  // console.log(ticket);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
