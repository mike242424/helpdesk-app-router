'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const ticket = {
      title,
      body,
      priority,
      user_email: 'test@email.com',
    };

    const response = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(ticket),
    });

    if (response.status === 201) {
      router.refresh();
      router.push('/tickets');
    }

    setTitle('');
    setBody('');
    setPriority('low');
  }
  return (
    <form className="w-1/2" onSubmit={(e) => handleSubmit(e)}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        <span>Body:</span>
        <input
          type="text"
          placeholder="Enter a body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>

      <label>
        <span>Prioirty: </span>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value={'low'}>Low</option>
          <option value={'medium'}>Medium</option>
          <option value={'high'}>High</option>
        </select>
      </label>

      <button className="btn-primary" disabled={isLoading}>
        {!isLoading ? <span>Add Ticket</span> : <span>Adding...</span>}
      </button>
    </form>
  );
}
