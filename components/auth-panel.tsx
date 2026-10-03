'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import { Text } from '@mantine/core';

export default function AuthPanel({ session }: { session: Session | null}) {
  const pathname = usePathname();
  return (
    <>
      <Text> Current path: {pathname}</Text>
      <Text> Auth Status: {session ? 'Logged In' : 'Logged Out'}</Text>
    </>
  );
}
