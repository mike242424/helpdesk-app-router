import Image from 'next/image';
import Link from 'next/link';

import dojoLogo from '../../public/dojo-logo.png';

export default function Navbar() {
  return (
    <nav>
      <Image
        src={dojoLogo}
        alt="logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
