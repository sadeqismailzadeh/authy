'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, Button } from '@mantine/core';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

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
