import { Center, Stack } from '@chakra-ui/react'
import { type Session } from 'next-auth'
import React from 'react'
import { AuthSession } from './AuthSession/AuthSession'

interface IAuthProps {
  session: Session | null
  reloadSession: () => void
}

export const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  return (
    <Center height='100vh'>
      <Stack align='center' spacing='6'>
        <AuthSession session={session} />
      </Stack>
    </Center>
  )
}
