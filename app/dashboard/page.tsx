import { Text, Title } from '@mantine/core'
import React from 'react'

export default function Dashboard() {
  return (
    <>
    <Title mb="lg"> Dashboard Overview</Title>
    <Text> This is a protected route, only visible to authenticated users</Text>
    </>
  )
}
