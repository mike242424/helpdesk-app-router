type Ticket = {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_email: string;
};

async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets');
  return await response.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  console.log(tickets);

  return (
    <>
      {tickets.map((ticket: Ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
