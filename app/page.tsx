import { Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { LoginForm } from '@/components/login-form';
import AuthPanel from '@/components/auth-panel';
import { auth } from '@/auth';



export default async function HomePage() {
  const session = await auth()
  
  return (
    <>
    <Title> Welcome to Authy</Title>
    <Text> This is a public page accessible for everyone </Text>

    <AuthPanel session={session} />
    </>
  );
}
