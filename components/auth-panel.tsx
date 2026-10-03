'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';


export default function AuthPanel({ session }: { session: Session | null}) {
  const pathname = usePathname();
  return (
    <>
      <div>AuthPanel</div>
      <p> Current path: {pathname}</p>
      <p> Auth Status: {session ? 'Logged In' : 'Logged Out'}</p>
    </>
  );
}
