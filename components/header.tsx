import React from 'react';
// import NavLink from 'next/link';
import { Button, Group, Text } from '@mantine/core';
import { auth, signOut } from '@/auth';
import NavLink from './nav-link';

export default async function Header() {
  const session = await auth();
  return (
    <>
      <Group justify="space-between" w="100%">
        <Group>
          <NavLink href="/">Home</NavLink>
          {session ? (
            <>
              <NavLink href="/dashboard" matchpattern="dashboard">
                Dashboard
              </NavLink>
              <form
                action={async () => {
                  'use server';
                  return await signOut();
                }}
              >
                {/* <Button type="submit" component={NavLink}>Logout</Button> */}
                <Button
                  // component={Link}
                  // href={href}
                  variant='subtle'
                  type="submit"
                  color='gray'
                  size="sm"
                  m={4}
                >
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <NavLink href="/login">Login</NavLink>
          )}
        </Group>
        <Text>{session ? 'Authenticated' : 'Not authenticated'} </Text>
      </Group>
    </>
  );
}
