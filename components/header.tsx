import React from 'react';
// import NavLink from 'next/link';
import { Group, Text } from '@mantine/core';
import { auth } from '@/auth';
import NavLink from './nav-link';

export default async function Header() {
  const session = await auth();
  return (
    <>
      <Group>
        <NavLink href="/">Home</NavLink>
        {session ? (
          <>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </>
        ) : (
          <NavLink href="/login">Login</NavLink>
        )}
        <Text>{session ? 'Authenticated' : 'Not authenticated'} </Text>
      </Group>
    </>
  );
}
