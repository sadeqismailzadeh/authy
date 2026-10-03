'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

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
        setError(result.error);
    }
  };

  return (
    <form action={credentialsAction}>
      <label htmlFor="credentials-email">
        Username
        <input type="text" id="username" name="username" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" name="password" />
      </label>
      <input type="submit" value="Sign In" />
      {error && <p>{error}</p>}
    </form>
  );
}
