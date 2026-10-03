'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, PasswordInput, TextInput } from '@mantine/core';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const credentialsAction = async (formData: FormData) => {
    const result = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: true,
      callbackUrl: '/',
    });

    if (result?.error) {
      setError('invalid credentials');
    }
  };

  return (
    <form action={credentialsAction}>
      <TextInput label="Username" placeholder="Username" size="md" radius="md" type="text" id="username" name="username"/>
      <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md"  type="password" id="password" name="password" />
      <Button fullWidth mt="xl" size="md" radius="md"   type="submit" value="Login" >
        Login
      </Button>

      {error && <p>{error}</p>}
    </form>
  );
}


