import { Button, Image, Input, Text } from '@chakra-ui/react'
import { type Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

interface ISessionProps {
  session: Session | null
}

const Authenticated = () => {
  const [username, setUsername] = useState('')

  const onSubmit = async () => {
    try {
      //  createUsername mutation to send our username to the GraphQL API
    } catch (error) {
      console.log('onSubmit error', error)
    }
  }
  return (
    <>
      <Text fontSize='2xl'>Crea un nombre de usuario</Text>
      <Input
        placeholder='Ingresa un nombre de usuario'
        value={username}
        onChange={(event) => { setUsername(event.target.value) }}
      />
      <Button width='100%' onClick={onSubmit}>Guardar</Button>
    </>
  )
}

const NotAuthenticated = () => {
  return (
    <>
      <Text fontSize='3xl'>iMessage</Text>
      <Button
        onClick={async () => await signIn('google')}
        leftIcon={<Image height='20px' src='/images/google-logo.png' alt='Logo de Google' />}
      >Continúa con Google
      </Button>
    </>
  )
}

export const AuthSession: React.FC<ISessionProps> = ({ session }) => {
  return (
    session
      ? <Authenticated />
      : <NotAuthenticated />
  )
}
