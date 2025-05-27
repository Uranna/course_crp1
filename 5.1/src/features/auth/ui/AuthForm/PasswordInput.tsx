'use client'

import { Input, InputGroup, Button, Field } from '@chakra-ui/react'
import { useState } from 'react'

interface PasswordInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Field.Root required>
      <Field.Label>
        Пароль
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup
        endElement={
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Скрыть' : 'Показать'}
          </Button>
        }
      >
        <Input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder="Не менее 6 символов"
        />
      </InputGroup>
    </Field.Root>
  )
}