'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, Button } from '@mantine/core';

export default function NavLink({
  href,
  children,
  matchpattern,
}: {
  href: string;
  children: React.ReactNode;
  matchpattern?: string;
}) {
  const pathname = usePathname();
  const isActive = matchpattern ? pathname.includes(matchpattern) : pathname === href;

  return (
    <>
      <Button
        component={Link}
        href={href}
        variant={isActive ? 'filled' : 'subtle'}
        color={isActive ? 'blue' : 'gray'}
        size="sm"
        m={4}
      >
        {children}
      </Button>
    </>
  );
}
