import Link from 'next/link';

type Ticket = {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_email: string;
};

async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  });

  return await response.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  // console.log(tickets);

  return (
    <>
      {tickets.map((ticket: Ticket) => (
        <Link href={`tickets/${ticket.id}`} key={ticket.id}>
          <div className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
