import Image from 'next/image';
import Link from 'next/link';

import dojoLogo from '../../public/dojo-logo.png';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <Image
          src={dojoLogo}
          alt="logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>Helpdesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Log In</Link>
      </nav>
      {children}
    </>
  );
}
