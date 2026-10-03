import React from 'react';
import { redirect } from 'next/navigation';
import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { auth } from '@/auth';
import AuthPanel from '@/components/auth-panel';
import { LoginForm } from '@/components/login-form';
import classes from './AuthenticationImage.module.css';

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect('/');
  }
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={2} className={classes.title}>
          Welcome to Authy
        </Title>

        {/* <TextInput label="Email address" placeholder="hello@gmail.com" size="md" radius="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" radius="md">
          Login
        </Button> */}

        <LoginForm />

        <AuthPanel session={session}/>
      </Paper>
    </div>
  );
}
