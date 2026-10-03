import '@mantine/core/styles.css';

import React from 'react';
import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import { auth } from '@/auth';
import { AppShellLayout } from '@/components/AppShellLayout';
import AuthPanel from '@/components/auth-panel';
import Header from '@/components/header';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await auth();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShellLayout header={<Header />} footer={<AuthPanel session={session} />}>
            {children}
          </AppShellLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
