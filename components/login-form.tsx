"use client"
import { signIn } from "next-auth/react"
 
export function LoginForm() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password") 
    })
  }
 
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
    </form>
  )
}