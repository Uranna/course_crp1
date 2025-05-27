'use client'

import { useState } from 'react'
import { 
  Box, 
  Button, 
  Input, 
  Stack, 
  Text,
  Heading,
  Field
} from '@chakra-ui/react'
import { PasswordInput } from './PasswordInput'
import { AppLink } from '@/shared/ui/AppLink'

interface AuthFormProps {
  isLogin?: boolean
}

export const AuthForm = ({ isLogin = false }: AuthFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Обработка отправки формы
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      rounded={'lg'}
      boxShadow={'lg'}
      bg="gray.50"
      _dark={{ bg: 'gray.900' }}
      p={8}
      w="full"
      maxW="md"
    >
      <Stack gap={6}>
        <Heading fontSize={'2xl'} textAlign={'center'}>
          {isLogin ? 'Вход в аккаунт' : 'Создание аккаунта'}
        </Heading>

        {!isLogin && (
          <Field.Root required>
            <Field.Label>
              Имя
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
            />
          </Field.Root>
        )}

          <Field.Root required>
            <Field.Label>
              Email
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
            />
          </Field.Root>

        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="solid" size="lg">
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>

        <Text textAlign={'center'} mt={4}>
          {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          <AppLink href={isLogin ? '/register' : '/login'} color="primary.500">
            {isLogin ? 'Создать' : 'Войти'}
          </AppLink>
        </Text>
      </Stack>
    </Box>
  )
}