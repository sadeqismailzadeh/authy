'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, Button } from '@mantine/core';

export default function DashBoardLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Button
        component={Link}
        href={href}
        justify="flex-start"
        fullWidth
        variant={isActive ? 'filled' : 'subtle'}
        color={isActive ? 'pink.3' : 'gray'}
        radius="md"
        size="md"
        fw={600}
        c={isActive ? '#3c1348' : '#70537d'}
      >
        {children}
      </Button>
    </>
  );
}
