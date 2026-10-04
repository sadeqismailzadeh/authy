import React from 'react';
import { Box, Divider, Flex, Grid, GridCol, Group, Stack } from '@mantine/core';
import { auth } from '@/auth';
import DashBoardLink from '@/components/dashboard-link';
import NavLink from '@/components/nav-link';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: any }) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <Flex m="-md" style={{ minHeight: 'calc(100dvh - 150px)' }}>
        <Box w={{ base: '100%', sm: 260 }} p="md">
          <Stack gap="xs">
            <DashBoardLink href="/dashboard">Overview</DashBoardLink>
            <DashBoardLink href="/dashboard/profile">Profile</DashBoardLink>
            <DashBoardLink href="/dashboard/settings">Settings</DashBoardLink>
          </Stack>
        </Box>
        <Divider orientation="vertical" />
        <Box p="xl" style={{ flex: 1 }}>
          {children}
        </Box>
      </Flex>
    </>
  );
}
