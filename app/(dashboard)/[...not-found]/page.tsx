import { notFound } from 'next/navigation';

export default function NotFound() {
  // served up the nearest not-found.tsx component found
  notFound();
}
