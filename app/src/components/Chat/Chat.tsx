import React from 'react'
import { Button } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
interface IChatProps {
  title?: string
}

export const Chat: React.FC<IChatProps> = ({ title = 'Logout' }) => {
  return (
    <div>
      Chat
      <Button onClick={async () => { await signOut() }}>{title}</Button>
    </div>
  )
}
